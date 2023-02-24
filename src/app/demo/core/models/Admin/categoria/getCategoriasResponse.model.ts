export interface GetCategoriaResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    Modulos:string;
    response: Response;
}

interface Response{
    data: Categoria[];
}

export interface Categoria{
    Id:number,
    Nombre:string,
    Categoria:number,
    Descripcion:string
    
}