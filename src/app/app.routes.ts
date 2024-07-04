import { Routes } from "@angular/router";
import { LoginComponent } from "./components/layout/login/login.component";
import { CartoesComponent } from "./components/content/cartoes/cartoes/cartoes.component";
import { ComprasdetailsComponent } from "./components/content/compras/comprasdetails/comprasdetails.component";
import { CompraslistComponent } from "./components/content/compras/compraslist/compraslist.component";
import { ContasComponent } from "./components/content/contas/contas/contas.component";
import { ContasdetailsComponent } from "./components/content/contas/contasdetails/contasdetails.component";
import { DashboardComponent } from "./components/main/dashboard/dashboard.component";
import { EntradasComponent } from "./components/content/entradas/entradas/entradas.component";
import { EntradasdetailComponent } from "./components/content/entradas/entradasdetail/entradasdetail.component";
import { MainComponent } from "./components/main/main/main.component";
import { MetasComponent } from "./components/content/metas/metas/metas.component";
import { MetasdetailsComponent } from "./components/content/metas/metasdetails/metasdetails.component";
import { SaidasComponent } from "./components/content/saidas/saidas/saidas.component";
import { SaidasdetailsComponent } from "./components/content/saidas/saidasdetails/saidasdetails.component";

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "user", component: MainComponent, children:[
        {path: "dashboard", component: DashboardComponent},
        {path: "cartoes", component: CartoesComponent, children:[
            {path: "compras", component: CompraslistComponent},
            {path: "compras/edit", component: ComprasdetailsComponent},
            {path: "compras/new", component: ComprasdetailsComponent}
        ]},
        {path: "entradas", component: EntradasComponent, children: [
            {path: "edit", component: EntradasdetailComponent},
            {path: "new", component: EntradasdetailComponent}
        ]},
        {path: "saidas", component: SaidasComponent, children: [
            {path: "edit", component: SaidasdetailsComponent},
            {path: "new", component: SaidasdetailsComponent}
        ]},
        {path: "bancos", component: ContasComponent, children:[
            {path: "edit", component: ContasdetailsComponent},
            {path: "new", component: ContasdetailsComponent}
        ]},
        {path: "metas", component: MetasComponent, children:[
            {path: "edit", component: MetasdetailsComponent},
            {path: "new", component: MetasdetailsComponent}
        ]}
    ]}
];
