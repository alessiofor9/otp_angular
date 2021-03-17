import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';
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
  
  imageSource : any


  constructor(private servizi:ServiziService, private sanitizer : DomSanitizer,private storage :SessionStorageService) { }

  ngOnInit(): void {
  }

  recupera()
  {
   
    this.servizi.recuperaQr(this.storage.get('mail')).subscribe(response=>{

        window.alert('CODICE QR RECUPERATO CORRETTAMENTE')
        this.qr=true
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${response.qrCode}`);
    })
  }

}
