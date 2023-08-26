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

  urlInfo = "http://localhost:8080/infoUtente"
  getInfoUtente(): Observable<any[]> {
    return this.http.get<any[]>(this.urlInfo);
  }




  utenti: any[] = []
  utenteValido: boolean = false
  admin: string = "admin"
  utenteLoggato: any[] = []



  login(nome: string, cognome: string) {
    this.getUtente().subscribe(utenti => {
      let check = utenti.find(dati => dati.nome === nome && dati.cognome === cognome);

      if (check) {
        this.utenteValido = true;
        this.utenteLoggato.push(check);
        if (this.utenteLoggato[0].nome == "a") {
          console.log("Utente loggato (ADMIN) :", this.utenteLoggato);
        } else
          console.log("Utente loggato (NORMAL) :", this.utenteLoggato);

      } else {
        this.utenteValido = false;
      }
    });
  }




}






