import { Component } from '@angular/core';
import { Constants } from '../shared/constants';

import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(faFacebook);
fontawesome.library.add(faTwitter);
fontawesome.library.add(faGithub);
fontawesome.library.add(faLinkedin);

@Component({
  selector: 'contact-component', // tslint:disable-line
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  socialLinks = {};

  constructor() {
    this.socialLinks = Constants.SOCIAL_LINKS;
  }
}
