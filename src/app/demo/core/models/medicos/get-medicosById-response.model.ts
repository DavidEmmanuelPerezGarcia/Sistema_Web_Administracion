export interface getMedicoByIdResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}
export interface Response{
    data:MedicosById[];
}

export interface MedicosById{
    Id: number,
    Numero: string,
    Cedula: string,
    Nombre: string,
    ApPaterno: string,
    ApMaterno: string,
    Domicilio: string,
    Telefono: string,
    TelefonoCasa: string,
    Estatus: number
}