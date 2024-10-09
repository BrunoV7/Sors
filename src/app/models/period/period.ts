import { Compras } from "../cartoes/compras";

export class Period {
  id!: number;
  name!: string;
  date!: Date;
  days!: number;
  month_id!: number;
  month!: string;
  year!: number;
  value!: number;
  compras: Compras[] = [];
}
