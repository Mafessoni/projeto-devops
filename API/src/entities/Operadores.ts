import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("OPERADORES", { schema: "DEVOPS" })
export class Operadores {
  @PrimaryGeneratedColumn({ type: "int", name: "ID_OPERADORES" })
  idOperadores: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 100 })
  nome: string | null;

  @Column("varchar", { name: "SENHA", nullable: true, length: 100 })
  senha: string | null;

  @Column("tinyint", { name: "ATIVO", nullable: true })
  ativo: number | null;
}
