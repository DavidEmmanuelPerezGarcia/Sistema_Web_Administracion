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
  insertMapeos: `${environment.urlBase3}Mapeos/Insert`,
  getMapeos: `${environment.urlBase3}Mapeos/Get`,
  getDetalleMapeos:`${environment.urlBase3}DetalleMapeos/Get` 
}

// Categoria
export const Categoria={
  insertCategoria:`${environment.urlBase2}InsertCategoria`,
  getCategoria:`${environment.urlBase2}GetCategorias`,
  deleteCategoria:`${environment.urlBase2}DeleteCategoria`
}

//Modulos
export const modulos = {
  insertModulos: `${environment.urlBase2}InsertModulo`,
  getModulos:`${environment.urlBase2}GetModulos`,
  deleteModulos:`${environment.urlBase2}DeleteModulo`
}

//persona
export const personas={
  insertPersonas: `${environment.urlBase2}InsertPersona`,
  getPersonas:`${environment.urlBase2}GetUsuarios`,
  updatePersonas:`${environment.urlBase2}UpdatePersona`,
  deletePersonas:`${environment.urlBase2}DeletePersona`,
  getById: `${environment.urlBase2}GetPersonaById`
}

//Clientes

export const clientes={
  getClientes:`${environment.urlBase2}GetClientes`,
  insertClientes:`${environment.urlBase2}InsertCliente`,
  getById:`${environment.urlBase2}GetDatosCliente`,
  update:`${environment.urlBase2}UpdateCliente`
}

// Articulos
export const articulos={
  getArticulos:`${environment.urlBase2}GetCambiosPrecio`
}

//medicos
export const medicos={
  getMedicos:`${environment.urlBase2}GetMedicos`,
  insertMedicos:`${environment.urlBase2}InsertMedico`,
  getByMedicos:`${environment.urlBase2}GetMedicoById`,
  updateMedicos:`${environment.urlBase2}UpdateMedico`
}

//Tickets
export const tickets={
  getTickets:`${environment.urlBase2}GetTickets`,
}

//Reporte entrada y movimientos de inventarios
export const VentasEntrada={
  get:`${environment.urlBase2}GetVentasEntrada`
}

