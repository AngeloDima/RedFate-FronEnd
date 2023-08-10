import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/CentroDati/utente.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  utenteVerificato: any;
  toggle: boolean = false;

  constructor(private ute: UtenteService) { }

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
