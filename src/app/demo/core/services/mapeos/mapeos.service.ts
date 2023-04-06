import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertMapeosResponse} from 'src/app/demo/core/models/mapeos/insert-mapeos-response-model';
import { InsertMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-mapeos.model';
import{GetMapeosResponse} from 'src/app/demo/core/models/mapeos/getMapeosResponse.model'

//endpoints//
import { detalle_mapeos, mapeos } from 'src/app/demo/global/endpoints';
import { MapeosRequest } from '../../models/mapeos/getMapeos';
import { getDetallesMapeosRequest } from '../../models/mapeos/getDetallesMapeos';
import { GetDetalleMapeosResponse } from '../../models/mapeos/getDetalleMapeosResponse.model';

@Injectable({
  providedIn: 'root',
})
export class MapeosService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  insertMapeos(data:InsertMapeosRequest): Observable<InsertMapeosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertMapeosResponse>(mapeos.insertMapeos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getMapeo(data:MapeosRequest): Observable<GetMapeosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetMapeosResponse>(mapeos.getMapeos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getDetalleMapeo(data:getDetallesMapeosRequest): Observable<GetDetalleMapeosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetDetalleMapeosResponse>(detalle_mapeos.getDetalleMapeos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}

