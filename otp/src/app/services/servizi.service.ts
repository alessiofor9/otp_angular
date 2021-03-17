import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdPc, Utente } from '../classi/Classe';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http : HttpClient) { }

 //MODIFICATO
  creautente(id: number,mail: string)
  {
    return this.http.post(`http://localhost:8080/totp/user/${id}/${mail}`,null);
  }

  //MODIFICATO
  controlloEsistente(id : number)
  {
    return this.http.get<boolean>(`http://localhost:8080/totp/user/${id}`);
  }

  //MODIFICATO
  login(id : number, otp : string)
  {
    return this.http.get(`http://localhost:8080/totp/user/${id}/otp/${otp}`);
  }

  // MODIFICATO
  recuperaQr(username : string)
  {
    return this.http.get<Utente>(`http://localhost:8080/totp/user/${username}/qrcode`);
  }

  // MODIFICATO
  modificaUtente(id : number , mail :string)
  {
    return this.http.put(`http://localhost:8080/totp/user/${id}/${mail}`, null);
  }

  //MODIFICATO
  eliminaUtente(id:number)
  {
    return this.http.delete(`http://localhost:8080/totp/user/${id}`);
  }




  

  creaidpc(a : IdPc)
  {
    return this.http.post<boolean>(`http://localhost:8080/idpc/creazione`,a);
  }

  loginidpc(a : IdPc)
  {
    return this.http.post<IdPc>(`http://localhost:8080/idpc/accesso`,a);
  }
}
