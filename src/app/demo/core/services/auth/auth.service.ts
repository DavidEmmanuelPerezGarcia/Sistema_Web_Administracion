import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, Data } from '../../models/auth/authResponse.model';
import { AuthRequest } from 'src/app/demo/core/models/auth/auth.model'
import { auth } from 'src/app/demo/global/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private headers: HttpHeaders;
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({
      
    })
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
  auth(login:AuthRequest): Observable<AuthResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<AuthResponse>(auth.login, login, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  isAutenticado():boolean{
    const token=localStorage.getItem('token');
    //verificar si existe el token o esta vacio
    if(token && token.trim() !==""){
      //decodificar el token para obtener la informacion del usuario
      JSON.parse(atob(token.split('.')[1]));
      return true
    }else{
      return false;
    }
  }
}
