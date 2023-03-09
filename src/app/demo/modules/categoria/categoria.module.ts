import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";


import { CateogoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CateogoriaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ]
})
export class CategoriaModule { }
