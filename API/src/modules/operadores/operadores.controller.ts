import { OperadoresService } from "../../modules/operadores/operadores.service";

async function Operadores(fastify) {
  const operadores = new OperadoresService();

  fastify.get("/operadores", async (req, res) => {
    try {
      const result = await operadores.get();
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send({ obj: err });
    }
  });

  fastify.get("/operadores/:id", async (req, res) => {
    const { idoperadores } = req.params;
    try {
      const result = await operadores.getByID(idoperadores);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.post("/operadores", async (req, res) => {
    try {
      const result = await operadores.insert(req.body);
      const resp = result;

      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.put("/operadores/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const result = await operadores.update(id, body);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.delete("/operadores/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await operadores.delete(id);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.post("/login", async (req, res) => {
    try {
      const { user, pass } = req.body;

      if (user == null || pass == null || user == "" || pass == "") {
        res.status(401).send("Não autorizado!");
      }

      const resp = await operadores.getlogin(user, pass);
      if (resp != undefined) {
        let token = fastify.jwt.sign({ operador: resp }, { expiresIn: "1h" });
        res.send({ token });
      } else {
        res.status(401).send("Não autorizado!");
      }
    } catch (err) {
      console.log(err);
      res.status(403).send(err);
    }
  });
}

export default Operadores;
