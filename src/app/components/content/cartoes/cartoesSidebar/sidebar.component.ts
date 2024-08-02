import { Component } from '@angular/core';
import { Cartoes } from '../../../../models/cartoes/cartoes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class CardsSidebarComponent {

  cartoes: Cartoes[] = [];
  card: Cartoes = new Cartoes();

  constructor() { }

  ngOnInit(): void {
    this.loadDummyCard();
  }

  loadDummyCard(){
    this.card.nome = "Card 1";
    this.card.digitos = 1234;
    this.card.id = 0;
    this.cartoes.push(this.card);
  }

}
