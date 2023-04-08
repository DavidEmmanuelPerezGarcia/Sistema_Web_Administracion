export interface GetVentasEntradasResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: VentasEntradas[];
}



export interface VentasEntradas{
   Codigo:string,
   Descripcion:string,
   Departamento:number,
   Familia:number,
   PrecioVenta: string,
   Costo:string,
   Ventas:string,
   Entradas:string,
   TeoricoActual:string
    
}