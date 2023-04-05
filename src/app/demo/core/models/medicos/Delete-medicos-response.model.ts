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
    Estatus:number
}