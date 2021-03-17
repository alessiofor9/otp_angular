import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  constructor(private session : SessionStorageService, private route : Router, private servizi : ServiziService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.session.clear()
    this.route.navigate([''])
  }

  eliminaprofilo()
  {
    this.servizi.eliminaUtente(this.session.get('id')).subscribe(response=>{
      if(response!=null)
      {
        this.session.clear()
        this.route.navigate([''])
      }
    })
  }
}
