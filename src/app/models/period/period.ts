import { Compras } from "../cartoes/compras";

export class Period {
    id!: number;
    name!: string;
    days!: number;
    month!: string;
    year!: number;
    value!: number;
    compras: Compras[] = [];
}
