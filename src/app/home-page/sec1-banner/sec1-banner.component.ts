import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/CentroDati/utente.service';

@Component({
  selector: 'app-sec1-banner',
  templateUrl: './sec1-banner.component.html',
  styleUrls: ['./sec1-banner.component.css']
})
export class Sec1BannerComponent implements OnInit {

  prova: any

  constructor(private ute: UtenteService) { }
  ngOnInit(): void {
    this.prova = this.ute.utenteLoggato
    console.log("ciao");

  }

}



