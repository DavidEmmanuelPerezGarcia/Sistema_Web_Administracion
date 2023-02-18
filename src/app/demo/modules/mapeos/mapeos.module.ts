import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ReactiveFormsModule
  ]
})
export class MapeosModule { }
