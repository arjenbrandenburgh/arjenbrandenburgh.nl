import {
  faGithub,
  faMedium,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export class Constants {
  public static get SOCIAL_LINKS(): any {
    return [
      {
        name: 'Github',
        icon: faGithub,
        url: 'https://www.linkedin.com/in/arjenbrandenburgh/',
      },
      {
        name: 'Medium',
        icon: faMedium,
        url: 'https://medium.com/@arjenbrandenburgh/',
      },
      {
        name: 'Facebook',
        icon: faFacebook,
        url: 'https://www.facebook.com/ArjenBrandenburgh',
      },
      {
        name: 'Twitter',
        icon: faTwitter,
        url: 'https://twitter.com/ArjenBrand',
      },
      {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/arjenbrandenburgh/',
      },
    ];
  }
}
