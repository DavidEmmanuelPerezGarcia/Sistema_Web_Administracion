import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMapeosComponent } from './Components/lista-mapeos.component';

const routes: Routes = [
  {
    path: 'listaMapeos',
    component: ListaMapeosComponent
  },
  {
    path: '',
    redirectTo: 'listaMapeos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaMapeosRoutingModule { }
