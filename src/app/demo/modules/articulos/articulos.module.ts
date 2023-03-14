import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './components/articulos.component';
// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      ArticulosComponent
    ],
    imports: [
      CommonModule,
      ArticulosRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      DataTablesModule
    ]
  })
  export class ArticulosModule { }