import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './components/medicos.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ]
})
export class MedicosModule { }