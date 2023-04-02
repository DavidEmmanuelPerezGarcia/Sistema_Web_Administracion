import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { VentaEntradasRoutingModule} from './ventas_entradas-routing.module';
import { VentasEntradasComponent } from './components/ventas-entradas.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VentasEntradasComponent
  ],
  imports: [
    CommonModule,
    VentaEntradasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule 
  ]
})
export class VentaEntradasModule { }