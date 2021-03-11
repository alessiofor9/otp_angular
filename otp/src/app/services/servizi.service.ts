import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utente } from '../classi/Classe';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http : HttpClient) { }
  creautente(u : Utente)
  {
    return this.http.post<Utente>(`http://localhost:8080/crea`,u);
  }
  controlloEsistente(username : string)
  {
    return this.http.get<boolean>(`http://localhost:8080/esistente/${username}`);
  }

  login(u : Utente)
  {
    return this.http.post<boolean>(`http://localhost:8080/accesso`,u);
  }
}
