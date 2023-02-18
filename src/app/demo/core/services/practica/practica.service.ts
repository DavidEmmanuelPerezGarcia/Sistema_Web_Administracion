import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/core/services/data-service.service';
import { Observable, map } from 'rxjs';

//Models//
import {InsertPracticaModel } from 'src/app/core/models/practica/practica/insert-practica-model';
import { InsertPracticaResponseModel } from 'src/app/core/models/practica/practica/insert-practica-response-model';

//Endpoint
import {getInventario} from 'src/app/global/endpoints';
import { mapeos } from 'src/app/global/endpoints';
import { Practica } from '../../models/practica/practica';
import { PracticaResponse } from '../../models/practica/practica-response.model';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {
  private headers: HttpHeaders
  constructor(
    private http: HttpClient,
     ) {
      const token = localStorage.getItem('token');
      this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
      })
    }
    
    
    // obtenerDatos(){
    //   return this.dataService.cargar();
    // }

    getPractica(data:Practica): Observable<PracticaResponse> {
      const httpOptions = {headers:this.headers}
      return this.http.post<PracticaResponse>(getInventario.traerInventario, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        })
      )
    }

    insertPractica(data:InsertPracticaModel): Observable<InsertPracticaResponseModel> {
      const httpOptions = {headers:this.headers}
      return this.http.post<InsertPracticaResponseModel>(mapeos.insertMapeos, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        })
      )
    }
}
