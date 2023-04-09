export interface GetClienteByIdResponse {
    StatusCode: number;
    success: boolean;
    message: string;
    response: Response;
  }
  
  interface Response {
    data: ClienteById[];
  }
  
  export interface ClienteById {
    Id:number
    Nombre:string,
    Banco:string,
    Cuenta:string,
    Ciudad:string
    CodPostal:string,
    Comentarios:string,
    Contacto:string,
    CondicionPago:string,
    Correo:string,
    Colonia:string,
    DireccionFiscal:string
    Representante:string
    Rfc:string,
    LimiteCredito:string,
    Telefono:string

  }