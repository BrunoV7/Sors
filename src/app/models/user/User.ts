import { saidas } from "../saidas/Saidas";
import { Entradas } from "../entrada/Entradas";
import { Cartoes } from "../cartoes/cartoes";
import { Metas } from "../metas/metas";
import { Contas } from "../ContasC/contas";
import { Mes } from "../mes/mes";

export class User {
  id!: number;
  email!: string;
  username!: string;
  nome!: string;
  role!: string;
  birthdate!: Date;
  mes: Mes[] = [];
}
