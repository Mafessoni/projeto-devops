import { EntityRepository, Repository } from "typeorm";

import { Entidades } from "../../entities/Entidades";

@EntityRepository(Entidades)
class EntidadesRepo extends Repository<Entidades> {}

export { EntidadesRepo };
