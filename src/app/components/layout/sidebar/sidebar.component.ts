import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  router = inject(Router);

  construtor() {}

  toggle(){
    this.sidebar.nativeElement.classList.toggle('open-sidebar');
  }

  nav(option: number){
    switch(option){
      case 0:
        this.router.navigate(['/user/dashboard']);
        break;

      case 1:
        this.router.navigate(['/user/cards']);
        break;

      case 2:
        this.router.navigate(['/user/income']);
        break;

      case 3:
        this.router.navigate(['/user/expanses']);
        break;

      case 4:
        this.router.navigate(['/user/banks']);
        break;

      case 5:
        this.router.navigate(['/user/goals']);
        break;

      case 6:
        this.router.navigate(['/user/dashboard']);
        break;

      case 7:
        this.router.navigate(['/user/dashboard']);
        break;

      case 8:
        this.router.navigate(['/user/profile']);
        break;
    }
  }

}
