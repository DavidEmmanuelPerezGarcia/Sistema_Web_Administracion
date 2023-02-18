import { Component, OnInit } from '@angular/core';
import { personaModel } from '../models/persona/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  persona: personaModel[]=[];

  ngOnInit(): void {
    
  }

  onSubmit():void{

  }
}
