import { Component, HostListener, ElementRef } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  trigger,
  transition,
} from '@angular/animations';

import {
  faFlask,
  faPaintBrush,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about-component', // tslint:disable-line
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition('hide => show', [
        animate(
          '1s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(75px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {
  faFlask = faFlask;
  faPaintBrush = faPaintBrush;
  faWrench = faWrench;

  state = 'hide';
  xpYears = new Date().getFullYear() - 2010;

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const elementPos = this.el.nativeElement.offsetTop || 0;
    const elementHeight = this.el.nativeElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;

    if (
      scrollPos >= elementPos ||
      scrollPos + windowHeight >= elementPos + elementHeight
    ) {
      this.state = 'show';
    }
  }
}
