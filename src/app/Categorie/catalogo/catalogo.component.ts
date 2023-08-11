import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/app/CentroDati/prodotti.service';
import { UtenteService } from 'src/app/CentroDati/utente.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  utenteVerificato: any;
  toggle: boolean = false;

  constructor(private ute: UtenteService, private prod: ProdottiService) { }

  combinedData: any[] = [];

  ngOnInit() {
    this.utenteVerificato = this.ute.utenteLoggato;


    //CHIAMATA PER I PRODOTTI
    this.prod.getAllProductData().subscribe(
      (data) => {
        // 'data' è un array che contiene i risultati combinati delle chiamate HTTP
        this.combinedData = data;
        console.log(this.combinedData);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }


  //PER IL MENU
  isToggle() {
    this.toggle = !this.toggle;
  }

  closeMenu() {
    this.toggle = false;
  }

  //ALL PRODUCT
}
