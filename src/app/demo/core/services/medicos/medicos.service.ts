import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import {medicos} from 'src/app/demo/global/endpoints';
import { GetMedicosResponse } from '../../models/medicos/get-medicos-response.model';
import { getMedicosRequest } from '../../models/medicos/get-medicos.model';
import { InsertMedicosResponse } from '../../models/medicos/insert-medicos-response.model';
import { InsertMedicosRequest } from '../../models/medicos/insert-medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private headers: HttpHeaders;

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

  insertMedicos(data:InsertMedicosRequest): Observable<InsertMedicosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertMedicosResponse>(medicos.insertMedicos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
