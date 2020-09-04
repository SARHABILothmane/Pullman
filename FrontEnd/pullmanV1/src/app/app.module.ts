import { SlidePartneraitComponent } from './componenets/slide-partnerait/slide-partnerait.component';
import { CarouselComponent } from './componenets/carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { InfoComponent } from './componenets/info/info.component';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';
import { SectionAboutComponent } from './componenets/section-about/section-about.component';
import { NosValeurComponent } from './componenets/nos-valeur/nos-valeur.component';
import { TeamComponent } from './componenets/team/team.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { CounterComponent } from './componenets/counter/counter.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ValeurComponent } from './componenets/valeur/valeur.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InfoComponent,
    NavBarComponent,
    SectionAboutComponent,
    NosValeurComponent,
    TeamComponent,
    FooterComponent,
    CounterComponent,
    AcceuilComponent,
    AproposComponent,
    SlidePartneraitComponent,
    ValeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
