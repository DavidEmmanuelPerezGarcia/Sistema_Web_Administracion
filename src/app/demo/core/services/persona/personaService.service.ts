import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import {  InsertPersonaResponse} from 'src/app/demo/core/models/persona/insertPersonaResponse';
import { InsertpersonaRequest } from 'src/app/demo/core/models/persona/insert-persona.model';


//endpoints//
import { Persona } from 'src/app/demo/global/endpoints';
import { GetPersonaResponse } from '../../models/persona/getPersonaResponse.model';
import { GetPersonaRequest } from '../../models/persona/get-persona.model';

@Injectable({
  providedIn: 'root',
})
export class personaService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  insertPersona(data:InsertpersonaRequest): Observable<InsertPersonaResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertPersonaResponse>(Persona.insertPersona, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getPersona(data:GetPersonaRequest): Observable<GetPersonaResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPersonaResponse>(Persona.getPersona, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

 
}

