import { Compras } from "./compras";
import { Fatura } from "./fatura";

export class Cartoes {
  id!: number;
  nome!: string;
  descricao!: string;
  cor1!: string;
  cor2!: string;
  limite!: number;
  brand!: number;
  digitos!: number;
  vencimento!: number;
  usuario_id!: number;
  valorTemp: number = 0;
  faturas: Fatura[] = [];
}
