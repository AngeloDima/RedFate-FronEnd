import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../CentroDati/utente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  utenteVerificato: any;
  toggle: boolean = false;

  constructor(public ute: UtenteService) { }

  ngOnInit(): void {
    this.utenteVerificato = this.ute.utenteLoggato;
  }

  isToggle() {
    this.toggle = !this.toggle;
  }
  closeMenu() {
    this.toggle = false;
  }
}
