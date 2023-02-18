import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
//import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    //NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
