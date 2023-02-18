import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { moduloRoutingModule } from './modulos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [
   ModulosComponent
  ],
  imports: [
    CommonModule,
    moduloRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressBarModule,
  ]
})
export class ModulosModule { }
