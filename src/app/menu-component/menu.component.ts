import { Component, HostListener } from '@angular/core';

import fontawesome from '@fortawesome/fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faBars);

@Component({
  selector: 'menu-component', // tslint:disable-line
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuOpen = false;

  constructor() { }

 @HostListener('window:scroll', ['$event'])
  showNavbar(): boolean {
    return window.scrollY > 400;
  }

}
