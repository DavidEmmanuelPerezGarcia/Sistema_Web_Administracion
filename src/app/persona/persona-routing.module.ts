import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona.component';

const routes:Routes=[
  {
    path: 'persona',
    component:PersonaComponent
  },
  {
    path:'',
    redirectTo:'persona',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class personaRoutingModule { }
