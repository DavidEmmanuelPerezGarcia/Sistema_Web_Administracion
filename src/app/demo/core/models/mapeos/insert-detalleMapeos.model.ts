export interface InsertDetalleMapeosRequest {
    id: number;
    tipo: number;
    idMapeo: number;
    codigo: string;
    estante: number;
    descripcionArticulo: string;
    idUsuario: number;
    consecutivo: number;
    cantidadDirecto: number;
    cantidadCaptura: number;
}