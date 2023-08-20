import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pantaloni-uomo',
  templateUrl: './pantaloni-uomo.component.html',
  styleUrls: ['./pantaloni-uomo.component.css'],
  animations: [
    trigger('fadeOutUp', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => visible', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('400ms ease-in'),
      ]),
      transition('visible => void', [
        animate('400ms ease-out', style({ opacity: 0, transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class PantaloniUOMOComponent {

  animationState: string = 'visible';

  constructor(private router: Router) { }

  leavePage() {
    this.animationState = 'void';
    setTimeout(() => {
      // After the exit animation is complete, navigate to the new route
      this.router.navigate(['/Uomo']);
    }, 300);
  }
}
