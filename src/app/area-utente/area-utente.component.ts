import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../CentroDati/utente.service';

@Component({
  selector: 'app-area-utente',
  templateUrl: './area-utente.component.html',
  styleUrls: ['./area-utente.component.css']
})
export class AreaUtenteComponent implements OnInit {

  constructor(public utente: UtenteService) { }

  dataInfo: any

  ngOnInit(): void {
    this.utente.getInfoUtente().subscribe(userDetails => {
      this.dataInfo = userDetails;
      console.log("TEST", this.dataInfo);
    });
  }

}


