import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import del modulo HttpClient



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Sec1BannerComponent } from './home-page/sec1-banner/sec1-banner.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UomoComponent } from './Categorie/uomo/uomo.component';
import { DonnaComponent } from './Categorie/donna/donna.component';
import { UnisexComponent } from './Categorie/unisex/unisex.component';
import { CatalogoComponent } from './Categorie/catalogo/catalogo.component';
import { Sec2Component } from './home-page/sec2/sec2.component';
import { Sec3FotoDestraComponent } from './home-page/sec3-foto-destra/sec3-foto-destra.component';
import { Sec4DueFotoComponent } from './home-page/sec4-due-foto/sec4-due-foto.component';
import { Sec5PopolariComponent } from './home-page/sec5-popolari/sec5-popolari.component';
import { FooterComponent } from './footer/footer.component';
import { ADMINComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FelpeUOMOComponent } from './Categorie/uomo/felpe-uomo/felpe-uomo.component';
import { PantaloniUOMOComponent } from './Categorie/uomo/pantaloni-uomo/pantaloni-uomo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Sec1BannerComponent,
    LoginComponent,
    UomoComponent,
    DonnaComponent,
    UnisexComponent,
    CatalogoComponent,
    Sec2Component,
    Sec3FotoDestraComponent,
    Sec4DueFotoComponent,
    Sec5PopolariComponent,
    FooterComponent,
    ADMINComponent,
    HeaderComponent,
    FelpeUOMOComponent,
    PantaloniUOMOComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
