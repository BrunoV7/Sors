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
import { Fatura } from "../../../../models/cartoes/fatura";
import { Compras } from "../../../../models/cartoes/compras";
import { NgStyle } from "@angular/common";
import { TransactionComponent } from "../../../transaction/transaction.component";

@Component({
  selector: "app-cartoesdetails",
  standalone: true,
  imports: [RouterOutlet, NgStyle, TransactionComponent],
  templateUrl: "./cartoesdetails.component.html",
  styleUrls: ["./cartoesdetails.component.scss"],
})
export class CartoesdetailsComponent implements OnChanges, AfterViewInit {
  @Input("id") id: number = 0;
  @Input("cartao") cartao: Cartoes = new Cartoes();
  @Input("fatura") fatura: Fatura = new Fatura();
  @ViewChild("banner") el!: ElementRef;
  @ViewChild("tabOption1") tabOption1!: ElementRef;
  @ViewChild("tabOption2") tabOption2!: ElementRef;
  Cartao: Cartoes = new Cartoes();
  total: number = 0;
  SelecionarFatura!: Fatura;
  compras: Compras[] = [];
  valorFatura: number = 0;
  tab: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["id"]) {
      if (this.id == 0) {
        this.valorFatura = 0;
    this.compras = [];
        this.loadDefault();
      } else {
        //this.loadCardById(this.id);
        this.valorFatura = 0;
    this.compras = [];
        this.loadDefault();
      }
    }
  }

  ngAfterViewInit() {
    if (this.el) {
      this.el.nativeElement.style.backgroundColor = this.Cartao.cor1;
    }
  }

  cardService = inject(CardsService);

  constructor() {
    if (this.id == 0) {
      this.valorFatura = 0;
    this.compras = [];
      this.loadDefault();

    } else {
      //this.loadCardById(this.id);
      this.valorFatura = 0;
    this.compras = [];
      this.loadDefault();
    }
  }

  loadDefault() {
    // Função para carregar valores padrão ou todos
    this.valorFatura = 0;
    this.compras = [];
    this.fatura.compras.forEach((compra) => {
      this.compras.push(compra);
      this.valorFatura += compra.valor;
    })
  }

  loadCardById(card_id: number) {
    this.cardService.findById(this.id).subscribe({
      next: (data) => {
        this.Cartao = data;
        console.log(this.Cartao);
        this.loadValorFaturaAtual();
      },
    });
  }

  loadValorFaturaId(faturaId: number) {
    this.total = 0;

    this.SelecionarFatura = <Fatura>(
      this.Cartao.faturas.find((fatura) => fatura.id == faturaId)
    );

    for (const compra of this.SelecionarFatura.compras) {
      this.total += compra.valor;
      console.log(this.total);
    }
  }
  //JetBrains Mono, Menlo, Monaco, Courier New, monospace
  loadValorFaturaAtual() {
    this.total = 0;

    // Verifica se faturas estão carregadas
    console.log(this.Cartao);
    if (this.Cartao && this.Cartao.faturas) {
      console.log(this.Cartao.faturas);
      this.SelecionarFatura = this.Cartao.faturas.find(
        (fatura) => fatura.status == "atual",
      ) as Fatura;

      // Verifica se fatura atual foi encontrada e se tem compras
      if (this.SelecionarFatura && this.SelecionarFatura.compras) {
        for (const compra of this.SelecionarFatura.compras) {
          this.total += compra.valor;
        }
      } else {
        console.log("Fatura atual não encontrada ou sem compras.");
      }
    } else {
      console.log("Faturas não carregadas.");
    }
  }

  getGradientColor(cor1: string, cor2: string): string {
    return "linear-gradient(113deg," + cor1 + " 0%, " + cor2 + " 100%)";
  }

  toReal(price: number){
    let retorno = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
    return retorno;
  }

  toggleTab(opc: number){
    switch(opc){
      case 1:
        this.tab = true;
        this.tabOption2.nativeElement.classList.toggle("active");
        this.tabOption1.nativeElement.classList.toggle("active");
        break;
      case 2:
        this.tab = false;
        this.tabOption1.nativeElement.classList.toggle("active");
        this.tabOption2.nativeElement.classList.toggle("active");
        break;
    }
  }

  toPeriod(compra: Compras0){

  }
  
}
