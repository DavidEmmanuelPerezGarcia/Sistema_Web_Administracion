export interface GetPerfilesResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Perfiles[];
}



export interface Perfiles{
}