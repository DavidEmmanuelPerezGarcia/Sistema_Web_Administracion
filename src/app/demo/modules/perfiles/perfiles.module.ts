import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilesComponent } from './components/perfiles.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilesComponent
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class PerfilesModule { }
