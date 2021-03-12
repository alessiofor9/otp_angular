import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdPc, Utente } from '../classi/Classe';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http : HttpClient) { }
  creautente(u : Utente)
  {
    return this.http.post<Utente>(`http://localhost:8080/crea`,u);
  }
  controlloEsistente(id : number)
  {
    return this.http.get<boolean>(`http://localhost:8080/esistente/${id}`);
  }

  login(u : Utente)
  {
    return this.http.post<boolean>(`http://localhost:8080/accesso`,u);
  }

  recuperaQr(username : string)
  {
    return this.http.get<Utente>(`http://localhost:8080/recupera/${username}`);
  }

  creaidpc(a : IdPc)
  {
    return this.http.post<boolean>(`http://localhost:8080/creaidpc`,a);
  }

  loginidpc(a : IdPc)
  {
    return this.http.post<IdPc>(`http://localhost:8080/accessoidpc`,a);
  }
}
