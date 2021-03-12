import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Utente } from '../classi/Classe';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente : Utente = new Utente

  constructor(private servizi : ServiziService,private storage : SessionStorageService) { }

  ngOnInit(): void {
  }

  accesso()
  {
    this.utente.mail=this.storage.get('mail')
    console.log(this.utente.mail)
    console.log(this.utente.hex_id)
    this.servizi.login(this.utente).subscribe(response=>{
      if(response==true)
      {
        window.alert('accesso eseguito')
      }
      else
      {
        window.alert('errore')
      }
    })
  }
  
}
