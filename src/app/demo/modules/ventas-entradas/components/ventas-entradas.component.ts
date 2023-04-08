import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getVentasEntradasRequest } from 'src/app/demo/core/models/Ventas_entradas/getVentasEntradas.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Services //
import { VentaEntradasService } from 'src/app/demo/core/services/VentasEntradas/venta-entradas.service';
import { VentasEntradas } from 'src/app/demo/core/models/Ventas_entradas/getVentasEntradasResponse.model';
// import { articulos } from 'src/app/demo/global/endpoints';

@Component({
  selector: 'app-ventas-entradas',
  templateUrl: './ventas-entradas.component.html',
  styleUrls: ['./ventas-entradas.component.scss']
})
export class VentasEntradasComponent implements OnInit {
  listaVentasEntradas:VentasEntradas[]=[];
  dtOptions: DataTables.Settings = {};

  public error = '';
  public message = '';
  VentaEntradasForm: FormGroup;


  constructor( private readonly router: Router,
    private FormBuilder: FormBuilder,
    private VentaEntradaService:VentaEntradasService){
      this.VentaEntradasForm = FormBuilder.group({
        sucursal:FormBuilder.control('',Validators.required),
        fechaInicial: FormBuilder.control('', Validators.required),
        fechaFinal: FormBuilder.control('', Validators.required),
        codigo: FormBuilder.control('', Validators.required),
        departamento: FormBuilder.control('', Validators.required),
        familia: FormBuilder.control('', Validators.required),
      })
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    };
      this.VentaEntradasForm.reset({Id: 1});
  }

  buscar():void{
    const request:getVentasEntradasRequest={
      
      idsucursal:this.VentaEntradasForm.controls['sucursal'].value,
      // articulo:""
    }
    this.VentaEntradaService.getVentasEntradas(request).subscribe(res => {
      // this.listaVentasEntradas = res.response.data;
      console.log(res.response.data)
    })
  }
}
