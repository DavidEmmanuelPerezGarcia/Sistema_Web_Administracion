export interface DeleteClienteResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: DeleteCliente[];
}

export interface DeleteCliente{
    id:number
    activo:number
}