import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas.component';

const routes: Routes = [
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: '',
    redirectTo: 'personas',
    pathMatch: 'full'
  },
  {
    path:"personas/:Id", 
    component:PersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
