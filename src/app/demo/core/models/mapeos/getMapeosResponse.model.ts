export interface GetMapeosResponse {
    StatusCode: number;
    success: boolean;
    message: string;
    response: Response;
  }
  
  interface Response {
    data: Mapeos[];
  }
  
  export interface Mapeos {
    Id:number,
    IdArea: number,
    IdSucursal: number,
    IdUsuario: number,
    Mueble: number,
    Zona: number,
    Cara: string,
    Area: string,
    Sucursal: string,
    NombreUsuario: string,
    Fecha: string,
    Estado: string,
    Tipo: number
  
  }
