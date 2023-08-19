import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felpe-uomo',
  templateUrl: './felpe-uomo.component.html',
  styleUrls: ['./felpe-uomo.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => visible', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('400ms ease-in'),
      ]),
      transition('visible => void', [
        animate('400ms ease-out', style({ opacity: 0, transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class FelpeUOMOComponent {
  animationState: string = 'visible';

  constructor(private router: Router) { }

  leavePage() {
    this.animationState = 'void';
    setTimeout(() => {
      // After the exit animation is complete, navigate to the new route
      this.router.navigate(['/Uomo']);
    }, 400);
  }
}
