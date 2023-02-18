import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapeosComponent } from './components/mapeos.component';

const routes: Routes = [
  {
    path: 'mapeos',
    component: MapeosComponent
  },
  {
    path: '',
    redirectTo: 'mapeos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapeosRoutingModule { }
