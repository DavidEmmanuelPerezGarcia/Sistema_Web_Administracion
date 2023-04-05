import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//
import { InsertCategoriaResponse} from 'src/app/demo/core/models/Admin/categoria/insert-categoriaResponse.model';
import { InsertCategoriaResquest } from 'src/app/demo/core/models/Admin/categoria/insert-categoria.model';
import { GetCategoriaResponse } from 'src/app/demo/core/models/Admin/categoria/getCategoriasResponse.model';


//endpoints//
import { Categoria} from 'src/app/demo/global/endpoints';
import { getCategoriaRequest } from '../../models/Admin/categoria/getCategorias.model';


@Injectable({
  providedIn: 'root',
})
export class categoriaService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  insertCategoria(data:InsertCategoriaResquest): Observable<InsertCategoriaResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<InsertCategoriaResponse>(Categoria.insertCategoria, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  getCategoria(data:getCategoriaRequest): Observable<GetCategoriaResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetCategoriaResponse>(Categoria.getCategoria, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  DeleteCategoria(id:number): Observable<GetCategoriaResponse> {
    const httpOptions = {headers:this.headers}
    const request:getCategoriaRequest={id}
    return this.http.post<GetCategoriaResponse>(Categoria.deleteCategoria, request, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  
}

