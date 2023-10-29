import { EntidadesService } from "../../modules/entidades/entidades.service";

async function Entidades(fastify) {
  const entidades = new EntidadesService();

  fastify.get("/entidades", async (req, res) => {
    try {
      const result = await entidades.get();
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send({ obj: err });
    }
  });

  fastify.get("/entidades/:id", async (req, res) => {
    const { idEntidades } = req.params;
    try {
      const result = await entidades.getByID(idEntidades);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.post("/entidades", async (req, res) => {
    try {
      const result = await entidades.insert(req.body);
      const resp = result;

      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.put("/entidades/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const result = await entidades.update(id, body);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });

  fastify.delete("/entidades/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await entidades.delete(id);
      const resp = result;
      res.status(200).send({ obj: resp });
    } catch (err) {
      res.status(403).send(err);
    }
  });
}

export default Entidades;
