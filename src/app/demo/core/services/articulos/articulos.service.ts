import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { articulos } from 'src/app/demo/global/endpoints';
import { getArticulosResponse } from '../../models/articulos/get-articulos-response.model';
import { getArticulosRequest } from '../../models/articulos/get-articulos.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private headers: HttpHeaders;
  
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }

  getArticulos(data:getArticulosRequest): Observable<getArticulosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<getArticulosResponse>(articulos.getArticulos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
