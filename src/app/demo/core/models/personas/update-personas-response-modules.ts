export interface UpdatePersonasResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Personas[];
}



export interface Personas{
    Id: number,
    IdUsuario: number,
    Nombre: string,
    ApPaterno: String,
    ApMaterno: string,
    Perfiles: number,
    IdSede: number,
    NombreUsuario: string,
    NombreSede: string,  
}