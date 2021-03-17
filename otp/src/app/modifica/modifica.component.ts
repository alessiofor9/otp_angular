import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  nuovamail : string = ""

  constructor(private route :Router , private service : ServiziService , private session : SessionStorageService) { }

  ngOnInit(): void {
  }

  modifica()
  {
    if(this.nuovamail != '')
    {
      this.service.modificaUtente(this.session.get('id'), this.nuovamail).subscribe(response=>{
        this.route.navigate(['homeuser'])
      })
    }
    else
    {
      window.alert('inserisci correttamente una nuova mail')
      this.nuovamail=''
    }
  }

}
