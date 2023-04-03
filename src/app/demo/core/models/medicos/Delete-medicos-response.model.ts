export interface DeleteMedicosResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: DeleteMedicos[];
}

export interface DeleteMedicos{
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
}