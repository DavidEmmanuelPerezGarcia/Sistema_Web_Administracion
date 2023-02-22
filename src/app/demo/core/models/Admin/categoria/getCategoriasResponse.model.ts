export interface GetCategoriaResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Categoria[];
}

export interface Categoria{
    Id:number,
    Nombre:string,
    Categoria:number,
    Modulos:any,
    Descripcion:string
    
}