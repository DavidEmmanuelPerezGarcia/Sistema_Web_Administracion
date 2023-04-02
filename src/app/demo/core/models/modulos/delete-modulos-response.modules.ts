export interface deleteModulosResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: deleteModulos[];
}



export interface deleteModulos{
    Nombre: string,
    Id: number,
    Categoria: number,
    Descripcion: number,
    Tema: string,
    Ruta: string,
    Icono: string,
    NombreCategoria: string
    
}