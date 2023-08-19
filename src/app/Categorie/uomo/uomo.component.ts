import { Component } from '@angular/core';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css']
})
export class UomoComponent {

  felpe: boolean = false

  showFelpe() {
    this.felpe = true;
    console.log("booleano felpe", this.felpe);

  }

  Pantaloni: boolean = false
  showPantaloni() {
    this.Pantaloni = true;
    console.log("booleano pantaloni", this.Pantaloni);
  }
}



