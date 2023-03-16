import { env } from 'process';
import { environment } from '../../../environments/environment';

export const auth = {
  login: `${environment.urlBase}SignIn`,
}

export const creditos = {
  getclientes: `${environment.urlBase}Mapeos/Get`,
}

export const getInventario={
  traerInventario: `${environment.urlBase}Mapeos/Get`
}

export const mapeos = {
  insertMapeos: `${environment.urlBase}Mapeos/Insert`,
  getMapeos: `${environment.urlBase}Mapeos/Get`,
 
}

export const detalle_mapeos={
  getDetalleMapeos:`${environment.urlBase} DetalleMapeos/Get`
}

// Categoria
export const Categoria={
  insertCategoria:`${environment.urlBase2}InsertCategoria`,
  getCategoria:`${environment.urlBase2}GetCategorias`
}

//Modulos
export const modulos = {
  insertModulos: `${environment.urlBase2}InsertModulo`,
  getModulos:`${environment.urlBase2}GetCategorias`
}

//persona

export const personas={
  insertPersonas: `${environment.urlBase2}InsertPersona`,
  getPersonas:`${environment.urlBase2}GetUsuarios`
}

//Clientes

export const clientes={
  getClientes:`${environment.urlBase2}GetClientes`,
  insertClientes:`${environment.urlBase2}InsertCliente`
}

// Articulos
export const articulos={
  getArticulos:`${environment.urlBase2}GetCambiosPrecio`
}

//medicos
export const medicos={
  getMedicos:`${environment.urlBase2}GetMedicos`,
  insertMedicos:`${environment.urlBase2}InsertMedico`
}

