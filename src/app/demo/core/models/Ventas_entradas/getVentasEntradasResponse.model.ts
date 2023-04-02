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
   codigo:string,
   departamento:number,
   familia:number,
   fecha_inicial:string,
   fecha_final:string
    
}