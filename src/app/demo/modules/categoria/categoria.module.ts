import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
