// Adjusted version of https://github.com/drusso85/ng2-scroll-to

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollTo]', // tslint:disable-line
})
export class ScrollToDirective {
  @Input() scrollTo: string;
  @Input() scrollOffSet: number;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    $event.preventDefault();

    const target = <HTMLElement>document.querySelector(this.scrollTo);
    if (!target) {
      return;
    }

    const scrollingElement: HTMLElement = this.findScrollableParent(target);

    try {
      if (scrollingElement === document.body) {
        this.smoothScroll(document.documentElement, target.offsetTop);
      }
    } catch (e) {
      console.warn(e);
    }

    this.smoothScroll(scrollingElement, target.offsetTop);
  }

  private smoothScroll(element: HTMLElement, end: number): void {
    const duration = 500;
    const clock: number = Date.now();
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      function(fn) {
        window.setTimeout(fn, 15);
      };

    if (this.scrollOffSet) {
      if (isNaN(Number(this.scrollOffSet))) {
        throw new Error('scrollOffSet must have numerical values');
      }
      end -= this.scrollOffSet;
    }

    const start = element.scrollTop;
    const step = () => {
      const elapsed = Date.now() - clock;
      const position = this.position(start, end, elapsed, duration);
      element.scrollTop = position;
      if (elapsed <= duration) {
        requestAnimationFrame(step);
      }
    };
    step();
  }

  // ease in out function thanks to:
  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
  easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  /**
   * calculate the scroll position we should be in
   * given the start and end point of the scroll
   * the time elapsed from the beginning of the scroll
   * and the total duration of the scroll (default 500ms)
   */
  private position(
    start: number,
    end: number,
    elapsed: number,
    duration: number
  ): number {
    if (elapsed > duration) {
      return end;
    }
    return start + (end - start) * this.easeInOutCubic(elapsed / duration);
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {HTMLElement} element
   * @returns {HTMLElement} element
   */
  private findScrollableParent(element: HTMLElement): HTMLElement {
    let isBody: boolean;
    let hasScrollableSpace: boolean;
    let hasVisibleOverflow: boolean;

    do {
      element = element.parentElement;
      // set condition variables
      isBody = element === document.body;
      hasScrollableSpace = element.clientHeight < element.scrollHeight;
      hasVisibleOverflow =
        getComputedStyle(element, null).overflow === 'visible';
    } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
    return element;
  }
}
