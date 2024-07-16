import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  construtor(){

  }

  toggle(){
    this.sidebar.nativeElement.classList.toggle('open-sidebar');
  }

}
