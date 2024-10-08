import { Component, inject, ViewChild, ViewContainerRef } from "@angular/core";
import { CardsSidebarComponent } from "../cartoesSidebar/sidebar.component";
import { CartoesdetailsComponent } from "../cartoesdetails/cartoesdetails.component";
import { CardsService } from "../../../../services/cards/cards.service";
import { Cartoes } from "../../../../models/cartoes/cartoes";
import { CommonModule } from "@angular/common";
import { Fatura } from "../../../../models/cartoes/fatura";
import { Compras } from "../../../../models/cartoes/compras";
import { Mes } from "../../../../models/mes/mes";
import { Entradas } from "../../../../models/entrada/Entradas";
import { Categoria } from "../../../../models/cartoes/Categoria";

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
  MesDefaultLista: Mes[] = [];
  MesDefault: Mes = new Mes();
  EntradaDefault: Entradas = new Entradas();
  dropdownOpen = false;
  selectedOption: string | null = null;
  mesSelecionado: Mes = new Mes();
  faturaSelecionada: Fatura = new Fatura();
  cartaoSelecionado: Cartoes = new Cartoes();
  cartoes: Cartoes[] = [];
  fatura: Fatura[] = [];
  comprasList: Compras[] = [];
  default: Cartoes = new Cartoes();
  card: Cartoes = new Cartoes();
  total: number = 0;
  holdId!: number;
  cardId: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadDummyMes();
    this.loadDummyCard(this.getRandomInteger(1, 8));
    this.loadValores();
    //this.loadCards();
    console.log(this.cartoes);
  }

  loadDummyCard(cards: number) {
    for (let i = 0; i < cards; i++) {
      let cartao: Cartoes = new Cartoes();
      cartao.nome = "cartao" + (i + 1) + "!";
      cartao.digitos = 1234;
      cartao.id = i + 1;
      cartao.cor1 = this.randomColor();
      cartao.cor2 = this.randomColor();
      cartao.corFonte = this.randomColor();
      cartao.brand = this.getRandomInteger(1, 5);

      this.cartoes.push(cartao);
    }
    this.loadDummyFatura(cards, this.MesDefault.id);
  }

  loadDummyFatura(faturas: number, mes_id: number) {
    for (let i = 0; i < faturas; i++) {
      let newFatura: Fatura = new Fatura();
      let setCompras: number = this.getRandomInteger(1, 100);

      newFatura.id = i;
      newFatura.nome = "fatura" + (i + 1) + "!";
      newFatura.vencimento = this.getRandomInteger(1, 12);
      newFatura.status = "atual";
      newFatura.dataCadastro = new Date();
      newFatura.cartao_credito_id = i + 1;
      newFatura.compras = [];

      for (let j = 0; j < setCompras; j++) {
        newFatura.compras.push(this.loadDummyCompra(newFatura.id));
      }

      // Adiciona a fatura à lista principal
      this.fatura.push(newFatura);

      // Adiciona a fatura ao MesDefault
      this.MesDefault.faturas.push(newFatura);
    }
  }

  loadDummyMes() {
    let newMes = new Mes();
    let data = new Date();
    newMes.id = 0;
    newMes.yearId = data.getFullYear();
    newMes.mesId = data.getMonth() + 1;
    switch (newMes.mesId) {
      case 1:
        newMes.nome = "janeiro";
        break;
      case 2:
        newMes.nome = "fevereiro";
        break;
      case 3:
        newMes.nome = "março";
        break;
      case 4:
        newMes.nome = "abril";
        break;
      case 5:
        newMes.nome = "maio";
        break;
      case 6:
        newMes.nome = "junho";
        break;
      case 7:
        newMes.nome = "julho";
        break;
      case 8:
        newMes.nome = "agosto";
        break;
      case 9:
        newMes.nome = "setembro";
        break;
      case 10:
        newMes.nome = "outubro";
        break;
      case 11:
        newMes.nome = "novembro";
        break;
      case 12:
        newMes.nome = "dezembro";
        break;
    }
    this.MesDefault = newMes;
    this.MesDefaultLista.push(newMes);
  }

  loadDummyCompra(id: number) {
    let newCompra = new Compras();
    newCompra.nome = "compra" + (id + 1) + "!";
    newCompra.codigo = "codigo" + (id + 1) + "!";
    newCompra.descricao = "nova compra!";
    newCompra.cadastro = new Date();
    newCompra.categoria = new Categoria();
    newCompra.categoria.id = this.getRandomInteger(1, 11);
    newCompra.categoria.name = "categoria" + newCompra.categoria.id + "!";
    newCompra.valor = this.getRandomInteger(1, 1000);
    newCompra.total = this.toReal(newCompra.valor);
    return newCompra;
  }

  toReal(price: number) {
    let retorno = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
    return retorno;
  }

  loadValores() {
    // Inicializa o valor total
    this.total = 0;

    for (let i = 0; i < this.cartoes.length; i++) {
      let totalTemp: number = 0;

      // Filtra todas as faturas relacionadas ao cartão atual
      let faturasCartao = this.MesDefault.faturas.filter(
        (fatura) => fatura.cartao_credito_id == this.cartoes[i].id,
      );

      // Para cada fatura encontrada, adiciona ao array de faturas do cartão e soma os valores
      faturasCartao.forEach((fatura) => {
        this.cartoes[i].faturas.push(fatura);

        // Soma os valores das compras desta fatura
        fatura.compras.forEach((compra) => {
          totalTemp += compra.valor;
        });
      });

      // Atribui o total temporário ao valor do cartão
      this.cartoes[i].valorTemp = totalTemp;
      this.cartoes[i].limite =
        totalTemp + totalTemp * (this.getRandomInteger(1, 100) * 0.01);

      // Soma o valor total ao acumulado geral
      this.total += totalTemp;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  randomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  getRandomInteger(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
  loadCard(id: number, cartao: Cartoes) {
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
    this.MesDefault.faturas.find((fatura) => {
      if (fatura.cartao_credito_id == cartao.id) {
        this.faturaSelecionada = fatura;
      }
    });
    this.cardId = id;
    this.cartaoSelecionado = cartao;
  }

  getGradientColor(cor1: string, cor2: string): string {
    return "linear-gradient(113deg," + cor1 + " 0%, " + cor2 + " 100%)";
  }
}
