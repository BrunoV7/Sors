import { Component, inject, ViewChild, ViewContainerRef } from "@angular/core";
import { CardsSidebarComponent } from "../cartoesSidebar/sidebar.component";
import { CartoesdetailsComponent } from "../cartoesdetails/cartoesdetails.component";
import { CardsService } from "../../../../services/cards/cards.service";
import { Cartoes } from "../../../../models/cartoes/cartoes";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cartoes",
  standalone: true,
  imports: [CardsSidebarComponent, CartoesdetailsComponent, CommonModule],
  templateUrl: "./cartoes.component.html",
  styleUrl: "./cartoes.component.scss",
})
export class CartoesComponent {
  @ViewChild("cartao", {
    read: ViewContainerRef,
  })
  view!: ViewContainerRef;
  cardService = inject(CardsService);
  cartoes: Cartoes[] = [];
  default: Cartoes = new Cartoes();
  card: Cartoes = new Cartoes();
  total: number = 0;
  holdId!: number;
  cardId: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadDummyCard(10);
    this.loadCards();
  }

  loadDummyCard(cards: number) {
    for (let i = 0; i < cards; i++) {
      this.card.nome = "cartao" + (i + 1) + "!";
      this.card.digitos = 1234;
      this.card.id = 0;
      this.card.cor1 = "#06593e";
      this.card.cor2 = "#052016";
      this.card.brand = 1;
      this.card.valorTemp = 4505.24;
      this.cartoes.push(this.card);
    }
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
  loadCard(id: number) {
    /*
    isso aqui inciava um novo container quando um cartão fosse clicado

    if (this.holdId != id) {
      this.holdId = id;
      this.view.clear();
      const componente = this.view.createComponent(CartoesdetailsComponent);
      componente.instance.id = id;
    } else {
      this.holdId = id;
    }
  }
     */
    this.cardId = id;
  }

  getGradientColor(cor1: string, cor2: string): string {
    return "linear-gradient(113deg," + cor1 + " 0%, " + cor2 + " 100%)";
  }
}
