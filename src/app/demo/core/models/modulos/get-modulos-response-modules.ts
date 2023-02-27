export interface GetModulosResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Modulos[];
}



export interface Modulos{
    Nombre: string,
    Id: number,
    Categoria: number,
    Descripcion: number,
    Tema: string,
    Ruta: string,
    Icono: string,
    NombreCategoria: string
    
}