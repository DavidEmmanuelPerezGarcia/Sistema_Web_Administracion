export interface PracticaResponse {
        StatusCode: number;
        success: boolean;
        message: string;
        response: Response; 
}
interface Response{
    data:Practicas[]
}

export interface Practicas{
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
