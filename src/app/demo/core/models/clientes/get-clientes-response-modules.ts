export interface getClientesResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

export interface Response{
    data:Clientes[]
}

export interface Clientes{
    Id:number
    Nombre:string,
    Banco:string,
    Cuenta:string,
    Ciudad:string
    CodPostal:string,
    Comentarios:string,
    Contacto:string,
    CondicionPago:string,
    Correo:string,
    Colonia:string,
    DireccionFiscal:string
    Representante:string
    Rfc:string,
    LimiteCredito:string,
    Telefono:string,
    activo:number
    Regimen:string

}