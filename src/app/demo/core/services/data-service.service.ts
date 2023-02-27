import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//Endpoint
import {getInventario} from 'src/app/demo/global/endpoints';

@Injectable()

export class DataService{
  constructor(private http: HttpClient){}

  //METODO PARA CARGAR LOS DATOS
  cargar(){
    return this.http.get("http://inventariosapi.ingeniojs.com/api/Mapeos/GetAreasInventario");
  }
}
