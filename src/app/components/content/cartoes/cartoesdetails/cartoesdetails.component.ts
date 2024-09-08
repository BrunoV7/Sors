import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CardsService } from "../../../../services/cards/cards.service";
import { Cartoes } from "../../../../models/cartoes/cartoes";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-cartoesdetails",
  standalone: true,
  imports: [RouterOutlet, NgStyle],
  templateUrl: "./cartoesdetails.component.html",
  styleUrls: ["./cartoesdetails.component.scss"],
})
export class CartoesdetailsComponent implements OnChanges, AfterViewInit {
  @Input("id") id: number = 0;
  @ViewChild("banner") el!: ElementRef;
  Cartao: Cartoes = new Cartoes();
  total: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["id"]) {
      if (this.id == 0) {
        this.loadDefault();
      } else {
        this.loadCardById(this.id);
      }
    }
  }

  ngAfterViewInit() {
    if (this.el) {
      this.el.nativeElement.style.backgroundColor = this.Cartao.cor;
    }
  }

  cardService = inject(CardsService);

  constructor() {
    if (this.id == 0) {
      this.loadDefault();
    } else {
      this.loadCardById(this.id);
    }
  }

  loadDefault() {
    // Função para carregar valores padrão ou todos
  }

  loadCardById(card_id: number) {
    this.cardService.findById(this.id).subscribe({
      next: (data) => {
        this.Cartao = data;
        console.log(this.Cartao);
        this.loadValorFatura();
      },
    });
  }

  loadValorFatura() {
    this.total = 0;
    for (const compra of this.Cartao.compras) {
      this.total += compra.valor;
      console.log(this.total);
    }
  }
}
