import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { personaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './persona.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    personaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class personaModule { }
