import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './components/modulos.component';

// Complementos //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulosModule { }