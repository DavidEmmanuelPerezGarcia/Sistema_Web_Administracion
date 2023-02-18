export interface GetDetalleMapeosResponse{
    StatusCode: number;
    success: boolean;
    message: string;
    response: Response;
}

export interface Response{
    data: detalleMapeos[];
}

export interface detalleMapeos{
    Id:number,
    Tipo:number,
    IdMapeo:number,
    Codigo:string,
    Estante:number,
    DescripcionArticulo:string,
    IdUsuario:number,
    Consecutivo:number,
    CantidadDirecto:number,
    CantidadCaptura:number
}