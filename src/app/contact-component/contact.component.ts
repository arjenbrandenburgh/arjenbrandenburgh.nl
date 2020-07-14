import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'contact-component', // tslint:disable-line
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  socialLinks = Constants.SOCIAL_LINKS;
}
