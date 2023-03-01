import { Modulos } from "../../modulos/get-modulos-response-modules";

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
    Descripcion:string
    Modulos:Modulos[],
   
    
}