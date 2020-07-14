import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'footer-component', // tslint:disable-line
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  socialLinks = Constants.SOCIAL_LINKS;
}
