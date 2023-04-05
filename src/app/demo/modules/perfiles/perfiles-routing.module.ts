import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from './components/perfiles.component';

const routes: Routes = [
  {
    path: 'perfiles',
    component: PerfilesComponent
  },
  {
    path: '',
    redirectTo: 'perfiles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
