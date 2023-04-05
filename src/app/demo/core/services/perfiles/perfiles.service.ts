import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertPerfilesResponse } from 'src/app/demo/core/models/perfiles/insert-perfiles-response-modules';
import { InsertPerfilesRequest } from 'src/app/demo/core/models/perfiles/insert-perfiles.model';

//endpoints//
import { personas} from 'src/app/demo/global/endpoints';
import { GetPerfilesResponse } from '../../models/perfiles/get-perfiles-response-modules';
import { getPerfilesRequest } from '../../models/perfiles/get-perfiles.model';




@Injectable({
  providedIn: 'root',
})
export class PerfilesService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  insertPersonas(data:InsertPerfilesRequest): Observable<InsertPerfilesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertPerfilesResponse>(personas.insertPersonas, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getPersonas(data:getPerfilesRequest): Observable<GetPerfilesResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetPerfilesResponse>(personas.getPersonas, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

}