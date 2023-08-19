import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('600ms ease-in')),
      transition(':leave', animate('600ms ease-out')),
    ]),
  ],
})
export class UomoComponent {
  felpe: boolean = false;
  Pantaloni: boolean = false;

  showFelpe() {
    this.felpe = true;
    this.Pantaloni = false;
  }

  showPantaloni() {
    this.Pantaloni = true;
    this.felpe = false;
  }
}
