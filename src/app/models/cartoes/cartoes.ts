import {Compras} from "./compras";

export class Cartoes {

    id!: number;
    nome!: string;
    descricao!: string;
    cor!: string;
    digitos!: number;
    vencimento!: number;
    compras: Compras[] = [];
    usuario_id!: number;


}
