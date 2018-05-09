import { Component } from '@angular/core';
import { Constants } from '../shared/constants';

import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import faAngleDown from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faFacebook);
fontawesome.library.add(faTwitter);
fontawesome.library.add(faGithub);
fontawesome.library.add(faLinkedin);
fontawesome.library.add(faAngleDown);

@Component({
  selector: 'home-component', // tslint:disable-line
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  socialLinks = {};

  constructor() {
    this.socialLinks = Constants.SOCIAL_LINKS;
  }
}
