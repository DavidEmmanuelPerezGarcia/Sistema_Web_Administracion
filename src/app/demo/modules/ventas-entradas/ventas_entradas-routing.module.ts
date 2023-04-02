import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasEntradasComponent } from './components/ventas-entradas.component';

const routes: Routes = [
  {
    path: 'Reporte_y_movimientos_de_inventarios',
    component: VentasEntradasComponent
  },
  {
    path: '',
    redirectTo: 'Reporte_y_movimientos_de_inventarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaEntradasRoutingModule { }
