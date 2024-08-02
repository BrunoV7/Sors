import { Component } from '@angular/core';
import { CardsSidebarComponent } from '../cartoesSidebar/sidebar.component';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CardsSidebarComponent],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss'
})
export class CartoesComponent {

}
