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

  constructor() 
  {
    this.genMeses();
  }

  genMeses(){
    for(let i = 0; i < 12; i++){
      let newMes = new Mes();
      newMes.id = i;
      newMes.nome = "mes"+i;
      this.MesDefaultLista.push(newMes);
  }
    console.log(this.MesDefaultLista);
  }

 

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(mes: Mes) {
    this.mesSelecionado = mes;
    this.dropdownOpen = false;
  }


}