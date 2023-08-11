import { Component } from '@angular/core';
import { ProdottiService } from 'src/app/CentroDati/prodotti.service';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css']
})
export class UomoComponent {
  constructor(private prod: ProdottiService) {
    this.containerFelpe = [];
  }

  containerFelpe: any[] = [];

  titolo: string = '';
  descrizione: string = '';
  prezzo: number | null = null;

  createFelpa(): void {
    if (this.titolo && this.descrizione && this.prezzo !== null) {
      this.prod.PostFelpe(this.descrizione, this.prezzo, this.titolo).subscribe((response) => {
        this.containerFelpe.push(response);
        console.log("POST", this.containerFelpe);
      });
    }
  }
}
