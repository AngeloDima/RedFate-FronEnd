import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../CentroDati/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utenti: any[] = []

  constructor(private log: UtenteService) { }
  ngOnInit(): void {
    this.log.getUtente().subscribe(utenti => {
      this.utenti = utenti
    })
  }


  nome: string = ""
  cognome: string = ""


  verificoLogin(nome: string, cognome: string) {
    this.log.login(nome, cognome)
  }
}


