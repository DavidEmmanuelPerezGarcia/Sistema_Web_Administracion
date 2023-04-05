import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './components/modulos.component';

const routes: Routes = [
  {
    path: 'modulos',
    component: ModulosComponent
  },
  {
    path: '',
    redirectTo: 'modulos',
    pathMatch: 'full'
  },
  {
    path: 'modulos/:id',
    component: ModulosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
