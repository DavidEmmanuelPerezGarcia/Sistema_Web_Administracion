import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DataTablesModule } from "angular-datatables";

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PracticaComponent } from './Componentes/practica.component';
import { PracticaRoutingModule } from './practica-routing.module';


@NgModule({
  declarations: [
    PracticaComponent
  ],
  imports: [
    CommonModule,
    PracticaRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PracticaModule { }
