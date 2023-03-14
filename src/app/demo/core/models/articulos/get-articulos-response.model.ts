export interface getArticulosResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data:Articulos[]
}

export interface Articulos{
    Codigo:string,
    Descripcion:string,
    Costo:number,
    PrecioFinal:number,
    PrecioMayoreo:number,
    PrecioMayoreoCred:number,
    PrecioOriginal:number,
    CostoActual:number
}