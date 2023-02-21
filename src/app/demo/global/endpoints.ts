import { environment } from '../../../environments/environment';

export const pokemonEnpoints = {
  pokemon: `${environment.urlBase}pokemon/`,
};

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

//persona

export const Persona={
  insertPersona: `${environment.urlBase2}InsertPersona`,
  getPersona:`${environment.urlBase2}GetUsuarios`
}