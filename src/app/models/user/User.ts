import {saidas} from "../saidas/Saidas";
import {Entradas} from "../entrada/Entradas";

export class User {

    id!: number;
    email!: string;
    password!: string;
    username!: string;
    role!: string;
    birthdate!: Date;
    saidas: saidas[] = [];
    entradas: Entradas[] = [];


}
