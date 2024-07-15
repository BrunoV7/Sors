import {TipoEntrada} from "../tipoEntrada/tipo-entrada";

export class Entradas {

    id!: number;
    nome!: string;
    valor!: number;
    recebimento!: Date;
    cadastro!: Date;
    descricao!: string;
    tipo!: TipoEntrada;
    usuario_id!: number;

}
