import {TipoSaida} from "../tipoSaida/tipo-saida";

export class saidas {

        id!: number;
        nome!: string;
        valor!: number;
        vencimento!: Date;
        dataDeCadastro!: Date;
        descricao!: string;
        tipo!: TipoSaida;
        usuario_id!: number;

}