import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ENTIDADES", { schema: "DEVOPS" })
export class Entidades {
  @PrimaryGeneratedColumn({ type: "int", name: "ID_ENTIDADES" })
  idEntidades: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 150 })
  nome: string | null;

  @Column("varchar", { name: "RAZAOSOCIAL", nullable: true, length: 200 })
  razaosocial: string | null;

  @Column("varchar", { name: "CNPJCPF", nullable: true, length: 20 })
  cnpjcpf: string | null;

  @Column("varchar", { name: "ENDERECO", nullable: true, length: 150 })
  endereco: string | null;

  @Column("varchar", { name: "BAIRRO", nullable: true, length: 150 })
  bairro: string | null;

  @Column("int", { name: "NUMERO", nullable: true })
  numero: number | null;

  @Column("varchar", { name: "CEP", nullable: true, length: 20 })
  cep: string | null;

  @Column("varchar", { name: "CIDADE", nullable: true, length: 150 })
  cidade: string | null;

  @Column("varchar", { name: "ESTADO", nullable: true, length: 2 })
  estado: string | null;
}
