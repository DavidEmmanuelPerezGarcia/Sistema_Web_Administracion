
export interface DeleteCategoriaResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: DeleteCategoria[];
}

export interface DeleteCategoria{
    Id:number,
    Nombre:string,
    Categoria:number,
    Descripcion:string,
   
    
}