import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';


//Models//
import {InsertPersonasResponse, InsertPersonasRequest, 
  GetPersonasResponse, getPersonasRequest, Personas,
  UpdatePersonasResponse, updatePersonasRequest, PersonasUpdate,
  GetPersonByIdRequest, GetPersonByIdResponse,
  deletePersonasRequest, DeletePersonasResponse   } from 'src/app/demo/core/models/personas/index'; 

//endpoints//
import { personas } from 'src/app/demo/global/endpoints';

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

  getPersonById(data:GetPersonByIdRequest):Observable<GetPersonByIdResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPersonByIdResponse>(personas.getById, data, httpOptions)
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