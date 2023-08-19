import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtenteService } from './CentroDati/utente.service';

export const AdminGuard: CanActivateFn = (route, state) => {

  const logServ = inject(UtenteService)
  const router = inject(Router)


  // if (logServ.utenteValido) {
  //   console.log("TEST",logServ.utenteLoggato[0].nome);
  //   console.log("utente verificato");
  //   return true
  // } else {
  //   console.log("riprova");
  //   return router.navigate(['/'])
  // }

  if (logServ.utenteLoggato[0].nome == "a" && logServ.utenteLoggato[0].cognome == "d") {
    console.log("ADMIN GUARD");
    return true
  } else {
    console.log("non sei admin");
    return router.navigate(['/'])
  }

};


