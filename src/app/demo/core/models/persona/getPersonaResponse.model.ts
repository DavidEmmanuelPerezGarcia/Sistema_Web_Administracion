export interface GetPersonaResponse {
    StatusCode: number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Persona[];
}

export interface Persona{
    Id:number,
    Nombre:string,
    Categoria:number
    Modulo:string
}