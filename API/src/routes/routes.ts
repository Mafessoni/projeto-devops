import Fastify, { FastifyInstance } from "fastify";
const Server = Fastify({ logger: false, bodyLimit: 5000000 });

Server.register(require("fastify-jwt"), {
  secret: process.env.SECRET_KEY || "FAZATUASENHASECRETAAI",
});

import fastifyCors from "@fastify/cors";

Server.register(fastifyCors, {});
Server.register(require("../modules/entidades/entidades.controller"));
Server.register(require("../modules/operadores/operadores.controller"));

export default Server;
