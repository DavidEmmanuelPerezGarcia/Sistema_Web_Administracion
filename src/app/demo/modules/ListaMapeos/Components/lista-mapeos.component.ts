import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MapeosRequest } from 'src/app/demo/core/models/mapeos/getMapeos';
import { MapeosService } from 'src/app/demo/core/services/mapeos/mapeos.service';

@Component({
  selector: 'app-lista-mapeos',
  templateUrl: './lista-mapeos.component.html',
  styleUrls: ['./lista-mapeos.component.scss']
})
export class ListaMapeosComponent implements OnInit{
  mapeosForm: FormGroup;
constructor( private mapeosService: MapeosService,
  private readonly router: Router,
  private FormBuilder: FormBuilder){
  this.mapeosForm = FormBuilder.group({
    idArea: FormBuilder.control('initial value',Validators.required),
    idSucursal: FormBuilder.control(''),
    idUsuario: FormBuilder.control(''),
    mueble: FormBuilder.control(''),
    zona: FormBuilder.control(''),
    cara: FormBuilder.control(''),
    area: FormBuilder.control(''),
    sucursal: FormBuilder.control('')
  });
}
  ngOnInit(): void {
    // this.dtOptions= {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   processing: true,
    //   language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
      
    // };  
  }
  // this.mapeosForm = FormBuilder.group({
  //   idArea: FormBuilder.control('initial value',Validators.required),
  //   idSucursal: FormBuilder.control(''),
  //   idUsuario: FormBuilder.control(''),
  //   mueble: FormBuilder.control(''),
  //   zona: FormBuilder.control(''),
  //   cara: FormBuilder.control(''),
  //   area: FormBuilder.control(''),
  //   sucursal: FormBuilder.control('')
  // });
  
  // dtOptions: DataTables.Settings = {};
  // dtTrigger:Subject<any>=new Subject<any>();

  // Mostrar(): void {
  //   if(this.mapeosForm.controls){
  //     const request1: MapeosRequest = {
  //       idSucursal: this.mapeosForm.controls['idSucursal'].value
  //     }
  //     this.mapeosService.getMapeo(request1).subscribe(res => {
  //       this.listMapeos = res.response.data;
  //       this.dtTrigger.next(null);
  //       this.dtTrigger.unsubscribe();
  //     })
  //   }else if(this.mapeosForm.invalid){
  //     return;
  //   }
  // }
}
