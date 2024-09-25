import { Compras } from "./compras";
import { Fatura } from "./fatura";

export class Cartoes {
  id!: number;
  nome!: string;
  descricao!: string;
  cor!: string;
  digitos!: number;
  vencimento!: number;
  usuario_id!: number;
  valorTemp: number = 0;
  faturas: Fatura[] = [];
}
