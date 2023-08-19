import { Component } from '@angular/core';
import { ProdottiService } from '../CentroDati/prodotti.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class ADMINComponent {
  constructor(private prod: ProdottiService) {
    this.containerFelpe = [];
    this.containerPantaloni = [];
  }

  containerFelpe: any[] = [];
  containerPantaloni: any[] = [];



  titoloF: string
  descrizioneF: string
  prezzoF: number

  titoloP: string
  descrizioneP: string
  prezzoP: number


  createFelpa(): void {
    if (this.titoloF && this.descrizioneF && this.prezzoF) {
      this.prod.PostFelpe(this.descrizioneF, this.prezzoF, this.titoloF).subscribe((response) => {
        this.containerFelpe.push(response);
        console.log("POST", this.containerFelpe);
      });
    }
  }



  createPantaloni(): void {
    if (this.titoloP && this.descrizioneP && this.prezzoP) {
      this.prod.PostPantaloni(this.descrizioneP, this.prezzoP, this.titoloP).subscribe((response) => {
        this.containerPantaloni.push(response);
        console.log("POST", this.containerPantaloni);
      });
    }
  }
}
