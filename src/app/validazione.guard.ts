import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtenteService } from './CentroDati/utente.service';

export const validazioneGuard: CanActivateFn = (route, state) => {

  const logServ = inject(UtenteService)
  const router = inject(Router)


  if (logServ.utenteValido) {
    console.log("utente verificato");
    return true
  } else {
    console.log("riprova");
    return router.navigate(['/'])
  }

};


