import { Component } from '@angular/core';
import { CardsSidebarComponent } from '../cartoesSidebar/sidebar.component';
import { CartoesdetailsComponent } from "../cartoesdetails/cartoesdetails.component";

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CardsSidebarComponent, CartoesdetailsComponent],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss'
})
export class CartoesComponent {

}
