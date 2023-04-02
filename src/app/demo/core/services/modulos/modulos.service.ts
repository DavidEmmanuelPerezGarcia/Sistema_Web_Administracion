import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertModulosResponse } from 'src/app/demo/core/models/modulos/insert-modulos-response-modules';
import { InsertModulosRequest } from 'src/app/demo/core/models/modulos/insert-modulos.model';

//endpoints//
import { mapeos, modulos, personas } from 'src/app/demo/global/endpoints';
import { GetModulosResponse } from '../../models/modulos/get-modulos-response-modules';
import { getModulosRequest } from '../../models/modulos/get-modulos.model';
import { deleteModulosRequest } from '../../models/modulos/delete-modulos';
import { deleteModulosResponse } from '../../models/modulos/delete-modulos-response.modules';



@Injectable({
  providedIn: 'root',
})
export class ModulosService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  insertModulos(data:InsertModulosRequest): Observable<InsertModulosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertModulosResponse>(modulos.insertModulos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getModulos(data:getModulosRequest): Observable<GetModulosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetModulosResponse>(modulos.getModulos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  DeleteModulos(id:number): Observable<deleteModulosResponse> {
    const httpOptions = {headers:this.headers}
    const request:deleteModulosRequest={id}
    return this.http.post<deleteModulosResponse>(modulos.deleteModulos, request, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}