import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) { }

  urlFelpe: string = "http://localhost:8080/felpe";
  urlPantaloni: string = "http://localhost:8080/pantaloni";

  getAllProductData(): Observable<any[]> {
    const felpeRequest = this.http.get(this.urlFelpe);
    const pantaloniRequest = this.http.get(this.urlPantaloni);

    return forkJoin([felpeRequest, pantaloniRequest]);
  }

  urlFelpePost: string = "http://localhost:8080/felpe/create"
  PostFelpe(descrizione: string, prezzo: number, titolo: string): Observable<any> {
    const body = { titolo: titolo, descrizione: descrizione, prezzo: prezzo };
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>(this.urlFelpePost, body, { headers });
  }


  urlPostPantaloniPost: string = "http://localhost:8080/pantaloni/create"
  PostPantaloni(descrizione: string, prezzo: number, titolo: string): Observable<any> {
    const body = { titolo: titolo, descrizione: descrizione, prezzo: prezzo };
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>(this.urlPostPantaloniPost, body, { headers }); // Correggi qui
  }

}


