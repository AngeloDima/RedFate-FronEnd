import { Component } from '@angular/core';
import { UtenteService } from './CentroDati/utente.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreFullStack';

  constructor(private router: Router) { }

  controlloURL(): boolean {
    const currentUrl = this.router.url;

    if (currentUrl === '/login' || currentUrl.startsWith('/Uomo/felpe') || currentUrl.startsWith('/Uomo/pantaloni')) {
      return false; // Nascondi header e footer
    } else {
      return true; // Mostra header e footer
    }
  }


}

