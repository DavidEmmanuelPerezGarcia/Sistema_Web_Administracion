import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetClientesResponse } from 'src/app/core/models/creditos/clientes/getClientesResponse.model';
import { ClientesRequest } from 'src/app/core/models/creditos/clientes/getClientes.model'
import { creditos } from 'src/app/global/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  getClientes(data:ClientesRequest): Observable<GetClientesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetClientesResponse>(creditos.getclientes, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
