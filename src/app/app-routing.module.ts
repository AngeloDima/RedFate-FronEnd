import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { UomoComponent } from './Categorie/uomo/uomo.component';
import { DonnaComponent } from './Categorie/donna/donna.component';
import { CatalogoComponent } from './Categorie/catalogo/catalogo.component';
import { ADMINComponent } from './admin/admin.component';
import { FelpeUOMOComponent } from './Categorie/uomo/felpe-uomo/felpe-uomo.component';
import { PantaloniUOMOComponent } from './Categorie/uomo/pantaloni-uomo/pantaloni-uomo.component';
import { FelpeDonnaComponent } from './Categorie/donna/felpe-donna/felpe-donna.component';
import { PantaloniDonnaComponent } from './Categorie/donna/pantaloni-donna/pantaloni-donna.component';


const routes: Routes = [

  { path: "", component: HomePageComponent },
  {
    path: "Uomo", component: UomoComponent, children:
      [
        { path: "felpe", component: FelpeUOMOComponent },
        { path: "pantaloni", component: PantaloniUOMOComponent }
      ]
  },


  {
    path: "Donna", component: DonnaComponent, children:
      [
        { path: "felpe", component: FelpeDonnaComponent },
        { path: "pantaloni", component: PantaloniDonnaComponent }
      ]
  },

  { path: "Catalogo", component: CatalogoComponent },

  { path: "login", component: LoginComponent },
  { path: "admin", component: ADMINComponent, canActivate: [AdminGuard] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



