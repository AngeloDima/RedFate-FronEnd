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




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Sec1BannerComponent,
    LoginComponent,
    UomoComponent,
    DonnaComponent,
    UnisexComponent,
    CatalogoComponent
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
