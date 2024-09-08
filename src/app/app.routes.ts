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
import { ProfileComponent } from "./components/content/profile/profile_view/profile.component";
import { UserComponent } from "./components/content/profile/user/user/user.component";
import { PreferencesComponent } from "./components/content/profile/preferences/preferences/preferences.component";
import { BillingComponent } from "./components/content/profile/billing/billing/billing.component";
import { NotificationsComponent } from "./components/content/profile/notifications/notifications/notifications.component";
import { CartoesdetailsComponent } from "./components/content/cartoes/cartoesdetails/cartoesdetails.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "user",
    component: MainComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      {
        path: "cards",
        component: CartoesComponent,
      },
      {
        path: "income",
        component: EntradasComponent,
        children: [
          { path: "edit", component: EntradasdetailComponent },
          { path: "new", component: EntradasdetailComponent },
        ],
      },
      {
        path: "expanses",
        component: SaidasComponent,
        children: [
          { path: "edit", component: SaidasdetailsComponent },
          { path: "new", component: SaidasdetailsComponent },
        ],
      },
      {
        path: "banks",
        component: ContasComponent,
        children: [
          { path: "edit", component: ContasdetailsComponent },
          { path: "new", component: ContasdetailsComponent },
        ],
      },
      {
        path: "goals",
        component: MetasComponent,
        children: [
          { path: "edit", component: MetasdetailsComponent },
          { path: "new", component: MetasdetailsComponent },
        ],
      },
      {
        path: "profile",
        component: ProfileComponent,
        children: [
          {
            path: "config",
            component: UserComponent,
            outlet: "profile",
          },
          {
            path: "preferences",
            component: PreferencesComponent,
            outlet: "profile",
          },
          { path: "billing", component: BillingComponent, outlet: "profile" },
          {
            path: "notifications",
            component: NotificationsComponent,
            outlet: "profile",
          },
        ],
      },
    ],
  },
];
