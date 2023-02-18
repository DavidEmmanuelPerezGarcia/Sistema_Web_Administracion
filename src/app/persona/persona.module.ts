import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { personaRoutingModule } from './persona-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    personaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressBarModule,
  ]
})
export class personaModule { }
