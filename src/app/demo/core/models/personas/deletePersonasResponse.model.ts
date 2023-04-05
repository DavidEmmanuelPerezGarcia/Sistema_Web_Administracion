export interface DeletePersonasResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: DeletePersonas[];
}



export interface DeletePersonas{
    Id: number,
    IdUsuario: number,
    Nombre: string,
    ApPaterno: null,
    ApMaterno: null,
    Perfiles: number,
    IdSede: number,
    NombreUsuario: string,
    NombreSede: string
    
}