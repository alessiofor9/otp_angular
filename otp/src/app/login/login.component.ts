import { Component, OnInit } from '@angular/core';
import { Utente } from '../classi/Classe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente : Utente = new Utente

  constructor() { }

  ngOnInit(): void {
  }

  accesso()
  {
    
  }
  
}
