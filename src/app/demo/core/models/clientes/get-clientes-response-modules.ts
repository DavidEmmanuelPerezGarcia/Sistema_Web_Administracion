export interface getClientesResponse{
    StatusCode:number;
    success: boolean;
    message: string;
    response: Response;
}

export interface Response{
    data:Clientes[]
}

export interface Clientes{
    Id:number
    idCliente:number
    fechaInicial:string
    fechaFinal:string
    cajero:string
    idSucursal:number
    sucursal:string
    estatusCorte:string
    idPerfil:string
    idUsuario:string
    tipo:string
    zona:string
    mueble:string
    cara:string
    fecha:string
    idArea:number
    familia:string
    codigo:string
    usuario:number
    folio:string
    proveedor:number
    folioInterno:string
    idCorte:number
    idProveedor:number
    numeroNota:string
    factura:string
    total:string
    observaciones:string
    ordenCompra:string
    comentarioCancela:string
    id_usuario:string
    nota:string
    costo:number
    cantidad:number
    idEntrada:number
    nombreCliente:string
    idMovimiento:number
    descuento:number
    idFactura:number
}