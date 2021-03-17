import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  otp : string = ""

  constructor(private servizi : ServiziService,private storage : SessionStorageService , private route:Router) { }

  ngOnInit(): void {
  }

  accesso()
  {
    
    this.servizi.login(this.storage.get('id'),this.otp).subscribe(response=>{
      if(response==true)
      {
        window.alert('accesso eseguito')
        this.route.navigate(['homeuser'])
      }
      else
      {
        window.alert('errore')
      }
    })
  }
  
}
