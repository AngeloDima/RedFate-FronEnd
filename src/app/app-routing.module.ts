import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { validazioneGuard } from './validazione.guard';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "", component: HomePageComponent },

];

// , canActivate: [validazioneGuard]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



