import { Component, HostListener } from '@angular/core';

import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'menu-component', // tslint:disable-line
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  faBars = faBars;

  menuOpen = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  showNavbar(): boolean {
    return window.scrollY > 400;
  }
}
