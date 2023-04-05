import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertPersonasResponse } from 'src/app/demo/core/models/personas/insert-personas-response-modules';
import { InsertPersonasRequest } from 'src/app/demo/core/models/personas/insert-personas.model';
import { GetPersonasResponse, Personas } from '../../models/personas/get-personas-response-modules';
import { getPersonasRequest } from '../../models/personas/get-personas.model';
import { UpdatePersonasResponse } from '../../models/personas/update-personas-response-modules';
import { updatePersonasRequest } from '../../models/personas/update-personas.model';

//endpoints//
import { personas} from 'src/app/demo/global/endpoints';
import { deletePersonasRequest } from '../../models/personas/deletePersonas.model';
import { DeletePersonasResponse } from '../../models/personas/deletePersonasResponse.model';




@Injectable({
  providedIn: 'root',
})
export class PersonasService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  
  insertPersonas(data:InsertPersonasRequest): Observable<InsertPersonasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertPersonasResponse>(personas.insertPersonas, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getPersonas(data:getPersonasRequest): Observable<GetPersonasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPersonasResponse>(personas.getPersonas, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getPersonasid(id:number): Observable<GetPersonasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPersonasResponse>(personas.getPersonas, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
  
  deletePersonas(id:number): Observable<DeletePersonasResponse> {
    const httpOptions = {headers:this.headers}
    const request:deletePersonasRequest={idPersona:id}
    return this.http.post<DeletePersonasResponse>(personas.deletePersonas, request, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  updatePersonas(data:updatePersonasRequest): Observable<UpdatePersonasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.put<UpdatePersonasResponse>(personas.updatePersonas, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
  

}