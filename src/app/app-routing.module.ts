import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { UomoComponent } from './Categorie/uomo/uomo.component';
import { DonnaComponent } from './Categorie/donna/donna.component';
import { UnisexComponent } from './Categorie/unisex/unisex.component';
import { CatalogoComponent } from './Categorie/catalogo/catalogo.component';
import { ADMINComponent } from './admin/admin.component';

const routes: Routes = [

  { path: "", component: HomePageComponent },
  { path: "Uomo", component: UomoComponent },
  { path: "Donna", component: DonnaComponent },
  { path: "Unisex", component: UnisexComponent },
  { path: "Catalogo", component: CatalogoComponent },

  { path: "login", component: LoginComponent },
  { path: "admin", component: ADMINComponent, canActivate: [AdminGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



