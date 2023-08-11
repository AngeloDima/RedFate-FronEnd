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

    // Utilizziamo la funzione 'forkJoin' per combinare le richieste in un unico array
    return forkJoin([felpeRequest, pantaloniRequest]);
  }
}
