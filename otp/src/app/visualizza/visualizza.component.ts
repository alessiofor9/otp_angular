import { Component, OnInit } from '@angular/core';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {

  ricerca : string = ''

  constructor(private servizi:ServiziService) { }

  ngOnInit(): void {
  }

  cerca()
  {
    if(this.ricerca!= "")
    {
      this.servizi.controlloEsistente(this.ricerca).subscribe(response=>{
        if(response == true)
        {
          window.alert('username esistente')
        }
        else
        {
          window.alert('username non esistente')
        }
      })
    }
    else
    {
      window.alert('inserisci username')
    }
  }

}
