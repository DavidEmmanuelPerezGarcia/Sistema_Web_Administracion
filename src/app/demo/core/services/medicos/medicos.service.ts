import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';


import {medicos} from 'src/app/demo/global/endpoints';
import { GetMedicosResponse } from '../../models/medicos/get-medicos-response.model';
import { getMedicosRequest } from '../../models/medicos/get-medicos.model';
import { InsertMedicosResponse } from '../../models/medicos/insert-medicos-response.model';
import { InsertMedicosRequest } from '../../models/medicos/insert-medicos.model';
import { updateMedicosResponse } from '../../models/medicos/update-medicos-reponse.model';
import { updateMedicosRequest } from '../../models/medicos/update-medicos.model';
import { Medicos } from 'src/app/demo/core/models/medicos/get-medicos-response.model';

import{getMedicoByIdRequest} from'src/app/demo/core/models/medicos/get-medicosById.model'
import{getMedicoByIdResponse}from'src/app/demo/core/models/medicos/get-medicosById-response.model'
import { DeleteMedicosRequest } from '../../models/medicos/Delete-medicos.model';
import { DeleteMedicosResponse } from '../../models/medicos/Delete-medicos-response.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
 
 

  private headers: HttpHeaders;
  listMedicos:Medicos[]=[];

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }

  getMedicos(data:getMedicosRequest): Observable<GetMedicosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetMedicosResponse>(medicos.getMedicos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getMedicosById(data:getMedicoByIdRequest): Observable<getMedicoByIdResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetMedicosResponse>(medicos.getById, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
  


  insertMedicos(data:InsertMedicosRequest): Observable<InsertMedicosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertMedicosResponse>(medicos.insertMedicos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  updateMedicos(data:updateMedicosRequest):Observable<updateMedicosResponse>{
    const httpOptions = {headers:this.headers}
    return this.http.post<updateMedicosResponse>(medicos.updateMedicos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  deleteMedicos( id:number, estatus:number):Observable<DeleteMedicosResponse>{
    const httpOptions = {headers:this.headers}
    const request:DeleteMedicosRequest={id,estatus}
    return this.http.post<DeleteMedicosResponse>(medicos.updateMedicos,request, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

}
