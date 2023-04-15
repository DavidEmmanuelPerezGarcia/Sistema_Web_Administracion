import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertMapeosResponse} from 'src/app/demo/core/models/mapeos/insert-mapeos-response-model';
import { InsertMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-mapeos.model';
import { InsertDetalleMapeosResponse} from 'src/app/demo/core/models/mapeos/insert-detalleMapeos-response-model';
import { InsertDetalleMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-detalleMapeos.model';
import{GetMapeosResponse} from 'src/app/demo/core/models/mapeos/getMapeosResponse.model'

//endpoints//
import { mapeos } from 'src/app/demo/global/endpoints';
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

  insertDetalleMapeos(data:InsertDetalleMapeosRequest): Observable<InsertDetalleMapeosResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertDetalleMapeosResponse>(mapeos.insertDetalleMapeos, data, httpOptions)
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
    return this.http.post<GetDetalleMapeosResponse>(mapeos.getDetalleMapeos, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}

