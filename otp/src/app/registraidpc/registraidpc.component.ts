import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdPc } from '../classi/Classe';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-registraidpc',
  templateUrl: './registraidpc.component.html',
  styleUrls: ['./registraidpc.component.css']
})
export class RegistraidpcComponent implements OnInit {

  idpc : IdPc = new IdPc
  
  constructor(private services : ServiziService,private route : Router) { }

  ngOnInit(): void 
  {

  }
  registra()
  {
    this.services.creaidpc(this.idpc).subscribe(response=>{
    if(response==true)
    {
      this.route.navigate(['cerca'])
    }
    else
    {
      window.alert("errore")
    }})
  }


}
