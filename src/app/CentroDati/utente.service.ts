import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/login"
  getUtente(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }

  utenti: any[] = []
  utenteValido: boolean = false
  admin: string = "a"
  utenteLoggato: any[] = []



  login(nome: string, cognome: string) {
    this.getUtente().subscribe(utenti => {
      let check = utenti.find(dati => dati.nome === nome && dati.cognome === cognome);

      if (check) {
        this.utenteValido = true;
        this.utenteLoggato.push(check);
        console.log("Utente loggato :", this.utenteLoggato);
      } else {
        this.utenteValido = false;
      }
    });
  }




}






