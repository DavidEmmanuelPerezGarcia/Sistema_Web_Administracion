import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';

import { PracticaComponent } from './Componentes/practica.component';

const routes: Routes=[
  {
    path:"practica",
    component: PracticaComponent
  },
  {
    path: '',
    redirectTo: 'practica',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaRoutingModule { }
