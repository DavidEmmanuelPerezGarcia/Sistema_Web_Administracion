export class personaModel{
  nombre: string
  apPaterno: string
  apMaterno: string
  perfil: number
  idSede: Number
  nombreUsuario: string
  nombreSede: string

  constructor(nombre:string, apPaterno:string,apMaterno:string,perfil:number,idSede:number,nombreUsuario:string,nombreSede:string){
    this.nombre=nombre;
    this.apPaterno=apPaterno;
    this.apMaterno=apMaterno;
    this.perfil=perfil;
    this.idSede=idSede;
    this.nombreUsuario=nombreUsuario;
    this.nombreSede=nombreSede;
  }
}