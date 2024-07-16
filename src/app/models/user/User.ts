import {saidas} from "../saidas/Saidas";
import {Entradas} from "../entrada/Entradas";
import {Cartoes} from "../cartoes/cartoes";
import {Metas} from "../metas/metas";
import {Contas} from "../ContasC/contas";

export class User {

    id!: number;
    email!: string;
    password!: string;
    username!: string;
    role!: string;
    birthdate!: Date;
    saidas: saidas[] = [];
    entradas: Entradas[] = [];
    cartoes: Cartoes[] = [];
    metas: Metas[] = [];
    contas_corrente: Contas[] = [];

}
