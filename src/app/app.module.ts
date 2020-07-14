import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ScrollToDirective } from './shared/scroll-to.directive';

import { MenuComponent } from './menu-component/menu.component';
import { FooterComponent } from './footer-component/footer.component';

import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { TechnologiesComponent } from './technologies-component/technologies.component';
import { ContactComponent } from './contact-component/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TechnologiesComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,

    ScrollToDirective,
  ],
  imports: [BrowserAnimationsModule, BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
