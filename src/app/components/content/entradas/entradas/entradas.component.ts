import { Component } from '@angular/core';
import { Entradas } from '../../../../models/entrada/Entradas';
import { Mes } from '../../../../models/mes/mes';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.scss'
})
export class EntradasComponent {

  MesDefaultLista: Mes[] = [];
  MesDefault: Mes = new Mes();
  EntradaDefault: Entradas = new Entradas();
  dropdownOpen = false;
  selectedOption: string | null = null;
  mesSelecionado: Mes = new Mes();

  constructor() {
    //this.genMeses();
    this.genMesesDefault();
  }

  genMesesDefault(){
    let newMes = new Mes();
      let data = new Date();
      newMes.id = 0;
      newMes.yearId = data.getFullYear();
      newMes.mesId = (data.getMonth() + 1);
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
      this.MesDefaultLista.push(newMes);
  }

  genMeses() {
    for (let i = 0; i < 12; i++) {
      let newMes = new Mes();
      newMes.id = i;
      switch (i + 1) {
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
      newMes.mesId = i + 1;
      newMes.yearId = 2024;
      this.MesDefaultLista.push(newMes);
    }
  }



  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(mes: Mes) {
    this.mesSelecionado = mes;
    this.dropdownOpen = false;
  }

  selectNewOption() {
    let atual = this.MesDefaultLista.length;
    if (atual != null) {
      let ultimoMes = this.MesDefaultLista.at(atual - 1)?.mesId;
      let ultimoId = this.MesDefaultLista.at(atual - 1)?.id;
      let anoId = this.MesDefaultLista.at(atual - 1)?.yearId;
      if (ultimoId != null) {
        if (ultimoMes != null) {
          if (ultimoMes <= 11) {
            let newMes = new Mes();
            newMes.id = ultimoId + 1;
            newMes.mesId = ultimoMes + 1;
            switch (ultimoMes + 1) {
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
            if (anoId != null) {
              newMes.yearId = anoId;
            }
            this.MesDefaultLista.push(newMes);
          } else if (ultimoMes == 12) {
            let newMes = new Mes();
            newMes.id = ultimoId + 1;
            newMes.mesId = 0 + 1;
            newMes.nome = "janeiro";
            if (anoId != null) {
              newMes.yearId = anoId + 1;
            }
            this.MesDefaultLista.push(newMes);
          }
        }
        this.dropdownOpen = false;
      }
    }
  }


}