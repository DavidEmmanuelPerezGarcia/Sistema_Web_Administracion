import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './components/medicos.component';

const routes: Routes = [
  {
    path: 'medicos',
    component: MedicosComponent
  },
  {
    path: '',
    redirectTo: 'medicos',
    pathMatch: 'full'
  },
  {
    path: 'medicos/:Id',
    component: MedicosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
