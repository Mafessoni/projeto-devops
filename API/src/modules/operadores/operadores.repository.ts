import { EntityRepository, Repository } from "typeorm";

import { Operadores } from "../../entities/Operadores";

@EntityRepository(Operadores)
class OperadoresRepo extends Repository<Operadores> {}

export { OperadoresRepo };
