import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos.component';

const routes:Routes=[
    {
      path: 'modulos',
      component:ModulosComponent
    },
    {
      path:'',
      redirectTo:'modulos',
      pathMatch:'full'
    }
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class moduloRoutingModule{

}