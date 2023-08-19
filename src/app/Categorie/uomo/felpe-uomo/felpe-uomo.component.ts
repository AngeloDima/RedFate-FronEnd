import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-felpe-uomo',
  templateUrl: './felpe-uomo.component.html',
  styleUrls: ['./felpe-uomo.component.css'],
  animations: [
    trigger('prova', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('600ms ease-in')),
      transition(':leave', animate('600ms ease-out')),
    ]),
  ],
})
export class FelpeUOMOComponent {

}



