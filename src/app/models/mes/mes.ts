import { Contas } from "../ContasC/contas";
import { Cartoes } from "../cartoes/cartoes";
import { Entradas } from "../entrada/Entradas";
import { Metas } from "../metas/metas";
import { saidas } from "../saidas/Saidas";
import { Fatura } from "../cartoes/fatura";

export class Mes {
    id!: number;
    nome!: string;
    status!: string;
    data!: Date;
    mesId!: number;
    yearId!: number;
    saidas: saidas[] = [];
    entradas: Entradas[] = [];
    faturas: Fatura[] = [];
    metas: Metas[] = [];
    contas_corrente: Contas[] = [];
}