import { Compras } from "./compras";

export class Fatura {
  id!: number;
  nome!: string;
  descricao!: string;
  vencimento!: number;
  preco!: number;
  status!: string;
  dataCadastro!: Date;
  dataPagamento!: Date;
  cartao_credito_id!: number;
  mes_id!: number;
  compras: Compras[] = [];
}
