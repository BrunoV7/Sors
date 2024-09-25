import { Component, inject } from "@angular/core";
import { Cartoes } from "../../../../models/cartoes/cartoes";
import { CardsService } from "../../../../services/cards/cards.service";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class CardsSidebarComponent {
  cardService = inject(CardsService);
  cartoes: Cartoes[] = [];
  default: Cartoes = new Cartoes();
  card: Cartoes = new Cartoes();
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    //this.loadDummyCard();
    this.loadCards();
  }

  loadDummyCard() {
    this.card.nome = "Card 1";
    this.card.digitos = 1234;
    this.card.id = 0;
    this.cartoes.push(this.card);
  }

  loadCards() {
    this.cardService.findAll().subscribe({
      next: (data) => {
        this.cartoes = data;
        console.log(data);
        //this.loadDefault();
      },
    });
  }

  /*
  loadDefault() {
    for (const cartao of this.cartoes) {
      cartao.valorTemp = 0;
      for (const compras of cartao.compras) {
        this.default.compras.push(compras);
      }
      for (const compra of cartao.compras) {
        cartao.valorTemp += compra.valor;
        console.log(cartao.valorTemp);
      }
    }
    for (const compras of this.default.compras) {
      this.total += compras.valor;
    }
  }

   */
}
