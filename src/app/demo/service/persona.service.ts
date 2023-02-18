import { Injectable } from '@angular/core';
import { personaModel } from 'src/app/models/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  persona: personaModel[]=[];

  agregarPersona(personas:personaModel){
    this.persona.push(personas);
  }
}
