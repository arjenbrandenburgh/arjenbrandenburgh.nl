import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Constants } from '../shared/constants';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-component', // tslint:disable-line
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  faAngleDown = faAngleDown;

  socialLinks = Constants.SOCIAL_LINKS;
}
