import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
//endpoints//
import { clientes} from 'src/app/demo/global/endpoints';
import { getClientesResponse } from '../../models/clientes/get-clientes-response-modules';
import { getClientesRequest } from '../../models/clientes/get-clientes.model';
import { InsertClientesResponse } from '../../models/clientes/insert-clientes-response-modules';
import { InsertClienteRequest } from '../../models/clientes/insert-clientes.model';
import { GetClienteByIdRequest, GetClienteByIdResponse, UpdateClienteRequest, UpdateClientesResponse } from '../../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private headers: HttpHeaders;
  
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }

  getclientes(data:getClientesRequest): Observable<getClientesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<getClientesResponse>(clientes.getClientes, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  insertClientes(data:InsertClienteRequest): Observable<InsertClientesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertClientesResponse>(clientes.insertClientes, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
  getClienteById(data:GetClienteByIdRequest):Observable<GetClienteByIdResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetClienteByIdResponse>(clientes.getById, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  updateCliente(data:UpdateClienteRequest):Observable<UpdateClientesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<UpdateClientesResponse>(clientes.update, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}
