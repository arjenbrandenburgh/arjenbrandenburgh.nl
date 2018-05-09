import { Component } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'footer-component', // tslint:disable-line
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = {};

  constructor() {
    this.socialLinks = Constants.SOCIAL_LINKS;
  }
}
