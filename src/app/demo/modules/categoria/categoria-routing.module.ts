import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriaComponent
  },
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CateogoriaRoutingModule { }
