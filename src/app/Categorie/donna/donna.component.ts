import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('600ms ease-in')),
      transition(':leave', animate('600ms ease-out')),
    ]),
  ],
})
export class DonnaComponent {


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
