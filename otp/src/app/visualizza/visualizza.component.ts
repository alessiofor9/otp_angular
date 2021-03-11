import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Utente } from '../classi/Classe';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {

  ricerca : string = ''
  utente : Utente = new Utente
  imageSource : any
  immagine : boolean = false

  constructor(private servizi:ServiziService,private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }

  cerca()
  {
    if(this.ricerca!= "")
    {
      this.servizi.controlloEsistente(this.ricerca).subscribe(response=>{
        if(response == true)
        {
          window.alert('Username gia utilizzato')
        }
        else
        {
          window.alert('Nuovo utente creato con successo')
          this.utente.mail=this.ricerca
          this.servizi.creautente(this.utente).subscribe(response=>{
            this.immagine=true
            this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.qrCode}`);

          })
        }
      })
    }
    else
    {
      window.alert('inserisci username')
    }
  }

}
