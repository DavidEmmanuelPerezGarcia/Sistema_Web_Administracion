export interface AuthResponse {
  StatusCode: number;
  Success: boolean;
  Error: boolean;
  Message: string;
  Response: Response;
}

interface Response {
  data: Data;
}

export interface Data {
  Status: boolean;
  Mensaje: string;
  Token: string;
  Usuario: Usuario;
}

export interface Usuario {
  Id: number;
  NombreUsuario: string;
  NombrePersona: string;
  IdSucursal: number;
  NombreSucursal: string;
  IdPerfil: number;
  PctDescuento: number;
}