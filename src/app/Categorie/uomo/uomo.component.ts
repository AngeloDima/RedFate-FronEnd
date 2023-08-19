import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css'],
  animations: [
    trigger('fadeCard', [
      state('void', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('*', style({ opacity: 1, transform: 'none' })),
      transition('void => *', animate('300ms ease-in')),
      transition('* => void', animate('300ms ease-out'))
    ])
  ]
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



