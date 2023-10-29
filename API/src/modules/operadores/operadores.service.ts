import { getCustomRepository } from "typeorm";
import { Operadores } from "../../entities/Operadores";
import { OperadoresRepo } from "../../modules/operadores/operadores.repository";

export class OperadoresService {
  private OperadoresRepo: OperadoresRepo;
  constructor() {
    this.OperadoresRepo = getCustomRepository(OperadoresRepo);
  }

  public async get() {
    return await this.OperadoresRepo.find();
  }

  public async getByID(id: number) {
    return await this.OperadoresRepo.find({ where: { idOperadores: id } });
  }

  public async insert(entity: Operadores): Promise<Operadores> {
    await this.OperadoresRepo.insert(entity);
    return entity;
  }
  public async update(id: number, entity: Operadores): Promise<Operadores> {
    await this.OperadoresRepo.update(id, entity);
    return entity;
  }

  public async delete(id: number): Promise<boolean> {
    await this.OperadoresRepo.delete({ idOperadores: id });
    return true;
  }

  public async getlogin(user, pass: string) {
    return await this.OperadoresRepo.findOne({ nome: user, senha: pass });
  }
}
