import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { MapeosRoutingModule } from './mapeos-routing.module';
import { MapeosComponent } from './components/mapeos.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MapeosComponent
  ],
  imports: [
    CommonModule,
    MapeosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ]
})
export class MapeosModule { }
