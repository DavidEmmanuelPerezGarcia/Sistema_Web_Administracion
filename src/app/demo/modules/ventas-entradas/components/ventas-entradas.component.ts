import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getVentasEntradasRequest } from 'src/app/demo/core/models/Ventas_entradas/getVentasEntradas.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Services //
import { VentaEntradasService } from 'src/app/demo/core/services/VentasEntradas/venta-entradas.service';
import { VentasEntradas } from 'src/app/demo/core/models/Ventas_entradas/getVentasEntradasResponse.model';
// import { articulos } from 'src/app/demo/global/endpoints';

import { Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-ventas-entradas',
  templateUrl: './ventas-entradas.component.html',
  styleUrls: ['./ventas-entradas.component.scss']
})
export class VentasEntradasComponent implements OnInit {
  listaVentasEntradas:VentasEntradas[]=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  public error = '';
  public message = '';
  VentaEntradasForm: FormGroup;
  // sucursal=2
  // familia=0

  constructor( private readonly router: Router,
    private FormBuilder: FormBuilder,
    private VentaEntradaService:VentaEntradasService){
      this.VentaEntradasForm = FormBuilder.group({
        // sucursal:FormBuilder.control('initial value',Validators.required),
        fechaInicial: FormBuilder.control('', Validators.required),
        fechaFinal: FormBuilder.control('', Validators.required),
        // codigo: FormBuilder.control('', Validators.required),
        // departamento: FormBuilder.control('', Validators.required),
        // familia: FormBuilder.control('', Validators.required),
      })
  }

  get form(): any {
    return this.VentaEntradasForm.controls;
  }
  
  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    };
      this.VentaEntradasForm.reset({Id: 1});
  }

  buscar():void{
    if(this.VentaEntradasForm.controls){

      const request:getVentasEntradasRequest={
        
        // sucursal:this.VentaEntradasForm.controls['sucursal'].value,
        codigo:"0",
        departamento:0,
        familia:0,
        fecha_inicial:this.VentaEntradasForm.controls['fechaInicial'].value,
        fecha_final:this.VentaEntradasForm.controls['fechaFinal'].value,
        // articulo:""
      }
      this.VentaEntradaService.getVentasEntradas(request).subscribe(res => {
        this.listaVentasEntradas = res.response.data;
        this.dtTrigger.next(null);
        this.dtTrigger.unsubscribe();
        console.log(res);
      })
    }else{
      return;
    }
  }
}
