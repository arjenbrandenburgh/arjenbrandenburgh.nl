import { Component, HostListener, ElementRef } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  query,
  stagger,
  state,
  trigger,
  transition,
} from '@angular/animations';

@Component({
  selector: 'technologies-component', // tslint:disable-line
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '100ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class TechnologiesComponent {
  state = 'hide';
  technologies = [];
  technologiesHidden = [
    {
      name: 'AngularJS<br/>Angular2+',
      image: 'angular.svg',
    },
    {
      name: 'HTML5',
      image: 'html5.svg',
    },
    {
      name: 'CSS3',
      image: 'css3.svg',
    },
    {
      name: 'Vanilla Javascript',
      image: 'javascript.svg',
    },
    {
      name: 'SASS',
      image: 'sass.svg',
    },
    {
      name: 'LESS',
      image: 'less.svg',
    },
    {
      name: 'RequireJS',
      image: 'requirejs.svg',
    },
    {
      name: 'jQuery',
      image: 'jquery.svg',
    },
    {
      name: 'NPM',
      image: 'npm.svg',
    },
    {
      name: 'NodeJS',
      image: 'nodejs.svg',
    },
    {
      name: 'Twitter Bootstrap',
      image: 'bootstrap.svg',
    },
    {
      name: 'Gulp',
      image: 'gulp.svg',
    },
    {
      name: 'Grunt',
      image: 'grunt.svg',
    },
    {
      name: 'Bower',
      image: 'bower.svg',
    },
    {
      name: 'Webpack',
      image: 'webpack.svg',
    },
    {
      name: 'Ruby on Rails',
      image: 'rails.svg',
    },
    {
      name: 'Git',
      image: 'git.svg',
    },
    {
      name: 'PHP',
      image: 'php.svg',
    },
    {
      name: 'MySQL',
      image: 'mysql.svg',
    },
    {
      name: 'Python',
      image: 'python.svg',
    },
    {
      name: 'Jasmine',
      image: 'jasmine.svg',
    },
    {
      name: 'Karma',
      image: 'karma.svg',
    },
    {
      name: 'Mocha',
      image: 'mocha.svg',
    },
    {
      name: 'Docker',
      image: 'docker.svg',
    },
  ];

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elementPos = this.el.nativeElement.offsetTop || 0;
    const elementHeight = this.el.nativeElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPos = window.scrollY;

    if (
      scrollPos >= elementPos ||
      scrollPos + windowHeight >= elementPos + elementHeight
    ) {
      this.technologies = this.technologiesHidden;
    }
  }
}
