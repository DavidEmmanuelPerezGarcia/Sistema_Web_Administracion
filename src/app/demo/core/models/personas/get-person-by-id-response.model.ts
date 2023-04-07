export interface GetPersonByIdResponse {
    StatusCode: number;
    success: boolean;
    message: string;
    response: Response;
  }
  
  interface Response {
    data: PersonById[];
  }
  
  export interface PersonById {
    Id: number;
    IdUsuario: number;
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Perfil: number;
    IdSede: number;
    NombreUsuario: string;
    NombreSede: string;
  }