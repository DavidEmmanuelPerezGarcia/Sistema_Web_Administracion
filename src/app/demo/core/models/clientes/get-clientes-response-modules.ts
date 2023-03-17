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
    Nombre:string
    Ciudad:string
    CodPostal:string
    CondicionPago:string
    DireccionFiscal:string
    Representante:string
    Rfc:string

}