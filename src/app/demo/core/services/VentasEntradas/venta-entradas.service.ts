import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import{getVentasEntradasRequest} from 'src/app/demo/core/models/Ventas_entradas/getVentasEntradas.model'
import{GetVentasEntradasResponse}from'src/app/demo/core/models/Ventas_entradas/getVentasEntradasResponse.model'

//endponits
import { VentasEntrada} from 'src/app/demo/global/endpoints';

@Injectable({
  providedIn: 'root'
})
export class VentaEntradasService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }

  getVentasEntradas(data:getVentasEntradasRequest): Observable<GetVentasEntradasResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetVentasEntradasResponse>(VentasEntrada.get, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
