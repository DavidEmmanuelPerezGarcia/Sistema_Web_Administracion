export interface GetMedicosResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Medicos[];
}

export interface Medicos{
    Id:number
    Numero:string
    Cedula:string
    Nombre:string
    ApPaterno:string
    ApMaterno:string
    Domicilio:string
    Telefono:string
    TelefonoCasa:string
    Estatus:number
    // Numero:string,
    BtnActivo:string
}