import { Categoria } from "./Categoria";

export class Compras {
  id!: number;
  nome!: string;
  codigo!: string;
  descricao!: string;
  cadastro!: Date;
  valor!: number;
  total!: string;
  categoria!: Categoria;
}
