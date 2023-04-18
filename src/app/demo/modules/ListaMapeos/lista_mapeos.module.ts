import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import {ListaMapeosRoutingModule} from './lista-mapeos-routing.module';
import { ListaMapeosComponent } from './Components/lista-mapeos.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
     ListaMapeosComponent
  ],
  imports: [
    CommonModule,
    ListaMapeosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ]
})
export class ListaMapeosModule { }
