export interface GetTicketsResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

interface Response{
    data: Tickets[];
}



export interface Tickets{
    Id: number,
    IdCliente: number,
    FechaInicial: string,
    FechaFinal: string,
    Cajero: string,
    IdSucursal: number,
    Sucursal: string,
    EstatusCorte: string,
    IdPerfil: string,
    IdUsuario: string,
    Tipo: string,
    Zona: string,
    Mueble: string,
    Caja: string,
    Fecha: string,
    IdArea: number,
    Familia: string,
    Codigo: string,
    Usuario: number,
    Folio: string,
    Proveedor: number,
    FolioInterno: string,
    IdCorte: number,
    IdProveedor: number,
    NumeroNota: string,
    Factura: string,
    Total: string,
    Observaciones: string,
    Ordencompra: string,
    ComentarioCancela: string,
    Id_usuario: string,
    Nota: string,
    Costo: number,
    Cantidad: number,
    IdEntrada: number,
    NombreCliente: string,
    NombreSucursal:string,
    IdMovimiento: number,
    Descuento: number,
    IdFactura: number,
    SubTotal:number
}