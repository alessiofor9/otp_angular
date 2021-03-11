import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Utente } from '../classi/Classe';
import { ServiziService } from '../services/servizi.service';

@Component({
  selector: 'app-recupera-qr',
  templateUrl: './recupera-qr.component.html',
  styleUrls: ['./recupera-qr.component.css']
})
export class RecuperaQrComponent implements OnInit {

  utente : Utente = new Utente
  qr : boolean = false
  mail : string = ''
  imageSource : any


  constructor(private servizi:ServiziService, private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }

  recupera()
  {
    if(this.mail!='')
    {
    this.servizi.recuperaQr(this.mail).subscribe(response=>{
      if(response!=null)
      {
        window.alert('CODICE QR RECUPERATO CORRETTAMENTE')
        this.qr=true
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.qrCode}`);
      }
      else
      {
        window.alert('UTENTE INESISTENTE')
        this.mail=''
      }
    })
  }
  else
  {
    window.alert('inserisci username')
  }
}

}
