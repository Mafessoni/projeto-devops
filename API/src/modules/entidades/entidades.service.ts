import { getCustomRepository } from "typeorm";
import { Entidades } from "../../entities/Entidades";
import { EntidadesRepo } from "../../modules/entidades/entidades.repository";

export class EntidadesService {
  private EntidadesRepo: EntidadesRepo;
  constructor() {
    this.EntidadesRepo = getCustomRepository(EntidadesRepo);
  }

  public async get() {
    return await this.EntidadesRepo.find();
  }

  public async getByID(id: number) {
    return await this.EntidadesRepo.find({ where: { idEntidades: id } });
  }

  public async insert(entity: Entidades): Promise<Entidades> {
    await this.EntidadesRepo.insert(entity);
    return entity;
  }
  public async update(id: number, entity: Entidades): Promise<Entidades> {
    await this.EntidadesRepo.update(id, entity);
    return entity;
  }

  public async delete(id: number): Promise<boolean> {
    await this.EntidadesRepo.delete({ idEntidades: id });
    return true;
  }
}
