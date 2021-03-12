import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { IdPc, Utente } from '../classi/Classe';
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
  idpc : IdPc = new IdPc

  constructor(private servizi:ServiziService,private sanitizer : DomSanitizer,private router : Router,private storage :SessionStorageService) { }

  ngOnInit(): void {
  }

  cerca()
  {
    this.servizi.loginidpc(this.idpc).subscribe(response=>{this.idpc=response
      console.log(this.idpc)
      if(this.idpc.id!= 0 && this.idpc.id!= undefined)
      {
        this.servizi.controlloEsistente(this.idpc.id).subscribe(response=>{
          if(response == true)
          {
            this.storage.set('mail',this.idpc.mail)
            this.router.navigate(['login'])
          }
          else
          {
            window.alert('Nuovo utente creato con successo')
            this.utente.id_utente=this.idpc.id
            this.utente.mail=this.idpc.mail
            if(this.utente.id_utente!=null && this.utente.mail!= null)
            this.servizi.creautente(this.utente.id_utente,this.utente.mail).subscribe(response=>{
              this.immagine=true
              if(this.utente.mail!= null)
              {
                this.servizi.recuperaQr(this.utente.mail).subscribe(response=>{
                  this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.qrCode}`); })
              }
             
             
            })
          }
        })
      }
      else
      {
        window.alert('inserisci username')
      }
    })
    
  }

}
