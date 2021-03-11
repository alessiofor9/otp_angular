import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http : HttpClient) { }

  controlloEsistente(username : string)
  {
    return this.http.get<boolean>(`http://localhost:8080/esistente/${username}`);
  }
}
