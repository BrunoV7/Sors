import { Cartoes } from "../../models/cartoes/cartoes";
import { Contas } from "../../models/ContasC/contas";
import { Mes } from "../../models/mes/mes";

export interface userDTO {
  id: number;
  email: string;
  nome: string;
  role: string;
  birthdate: Date;
  cartoes: Cartoes[];
  contas_corrente: Contas[];
  mes: Mes[];
}
