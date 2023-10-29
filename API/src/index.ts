import jwt from "fastify-jwt";
import app from "./routes/routes";
import { DBConnect } from "./database/mysql";
import fastify from "fastify";

require("dotenv").config();
const port = process.env.PORT || 3000;

app.addHook("onRequest", async (request, reply) => {
  try {
    if (request.url != "/login") await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

const start = async () => {
  try {
    await DBConnect();
    app.listen(port, "0.0.0.0", (err) => {
      if (err) throw err;
      console.log(` 🚀 Server is running in http://localhost:${port}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
