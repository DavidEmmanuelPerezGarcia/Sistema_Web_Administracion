import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MapeosRequest } from 'src/app/demo/core/models/mapeos/getMapeos';
import { Mapeos } from 'src/app/demo/core/models/mapeos/getMapeosResponse.model';

// Models //
import { InsertMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-mapeos.model';
import { InsertDetalleMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-detalleMapeos.model';
// import { Practica } from 'src/app/demo/core/models/practica/practica';

// Services //
import { MapeosService } from 'src/app/demo//core/services/mapeos/mapeos.service';
import { Subject, Subscriber } from 'rxjs';
import { getDetallesMapeosRequest } from 'src/app/demo/core/models/mapeos/getDetallesMapeos';
import { detalleMapeos } from 'src/app/demo/core/models/mapeos/getDetalleMapeosResponse.model';

@Component({
  selector: 'app-mapeos',
  templateUrl: './mapeos.component.html',
  styleUrls: ['./mapeos.component.scss']
})
export class MapeosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  listMapeos: Mapeos[]=[];
  listDetalleMapeos: detalleMapeos[]=[];
  mapeosForm: FormGroup;
  detalleMapeosForm:FormGroup;
  public error = '';
  public message = '';
  public detalleError = '';
  public detalleMessage = '';
  public idMapeo=0;

  constructor(
    private mapeosService: MapeosService,
    private readonly router: Router,
    private FormBuilder: FormBuilder,
  ) {
    this.mapeosForm = FormBuilder.group({
      idArea: FormBuilder.control(0,Validators.min(1)),
       idSucursal: FormBuilder.control(0,Validators.min(1)),
      mueble: FormBuilder.control('',Validators.required),
      zona: FormBuilder.control('',Validators.required),
      cara: FormBuilder.control('',Validators.required)
    });

    this.detalleMapeosForm = FormBuilder.group({
      idMapeo: FormBuilder.control('',Validators.required),
      codigo: FormBuilder.control('',Validators.required),
      estante: FormBuilder.control('',Validators.required),
      descripcionArticulo: FormBuilder.control('',Validators.required),
      consecutivo: FormBuilder.control('',Validators.required),
     
    })
  }

  get form(): any {
    return this.mapeosForm.controls;
  }

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
      
    };  
    this.Reset();
    this.Mostrar();
    this.MostrarDetalles();
    this.detalleMapeosForm.disable();
    // this.mapeosForm.get('estante')?.disable();
  }

  onSubmit(): void {
    if(this.mapeosForm.invalid){
      this.error = "!Valida Campos!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertMapeosRequest = {
      idArea: this.mapeosForm.controls['idArea'].value,
      idSucursal: this.mapeosForm.controls['idSucursal'].value,
      idUsuario: Number(localStorage.getItem('idUsuario')),
      mueble: this.mapeosForm.controls['mueble'].value,
      zona: this.mapeosForm.controls['zona'].value,
      cara: this.mapeosForm.controls['cara'].value,

    }
    this.mapeosService.insertMapeos(request).subscribe(res => {
      console.log(res)
      if(res.success == true){
        this.message = res.message;
        setTimeout(()=>{
          this.message = "";
        }, 3000);
        // this.Reset();
        this.idMapeo=res.response.data;
        this.detalleMapeosForm.reset({
          idMapeo:this.idMapeo,
          codigo: "",
          descripcionArticulo: "",
          estante: 0,
          consecutivo: 0,
        });
        this.detalleMapeosForm.enable();
        this.mapeosForm.disable();
      }else{
        this.error = res.message;
        setTimeout(()=>{
          this.error = "";
        }, 3000);
      }
    })
  }



  onSubmitDetalle(): void {
    if(this.detalleMapeosForm.invalid){
      this.detalleError = "!Valida Campos De Detalles!";
      setTimeout(()=>{
        this.detalleError = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertDetalleMapeosRequest = {
      id: 0,
      tipo: 0,
      idMapeo: this.detalleMapeosForm.controls['idMapeo'].value,
      codigo:  this.detalleMapeosForm.controls['codigo'].value,
      estante: Number(this.detalleMapeosForm.controls['estante'].value),
      descripcionArticulo: this.detalleMapeosForm.controls['descripcionArticulo'].value,
      idUsuario: Number(localStorage.getItem('idUsuario')),
      consecutivo: Number(this.detalleMapeosForm.controls['consecutivo'].value),
      cantidadDirecto: 0, 
      cantidadCaptura: 0,
    }
    this.mapeosService.insertDetalleMapeos(request).subscribe(res => {
      if(res.success == true){
        this.detalleMessage = res.message;
        setTimeout(()=>{
          this.detalleMessage = "";
        }, 3000);
        this.MostrarDetalles();
        this.ResetDetalle();
        this.dtTrigger.next(null);
        this.dtTrigger.unsubscribe();
      }else{
        this.detalleError = res.message;
        setTimeout(()=>{
          this.detalleError = "";
        }, 3000);
      }
    })
  }

  Reset():void {
    this.mapeosForm.reset({
      idArea: "",
      idSucursal: "",
      mueble: '',
      zona: '',
      cara: ''
    });
  }

  ResetDetalle():void {
    this.detalleMapeosForm.reset({
      codigo: "",
      descripcionArticulo: "",
      estante: 0,
      consecutivo: 0,
      idMapeo:this.idMapeo  
      
    });
  }
  
  LogOut():void {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  Mostrar(): void {
    if(this.mapeosForm.controls){
      const request1: MapeosRequest = {
        idSucursal: this.mapeosForm.controls['idSucursal'].value
      }
      this.mapeosService.getMapeo(request1).subscribe(res => {
        this.listMapeos = res.response.data;
        this.dtTrigger.next(null);
        this.dtTrigger.unsubscribe();
      })
    }else if(this.mapeosForm.invalid){
      return;
    }
  }

  MostrarDetalles(): void{
    console.log("entra",this.idMapeo)
    const request: getDetallesMapeosRequest = {
      IdMapeo: this.idMapeo
    }
    this.mapeosService.getDetalleMapeo(request).subscribe(res => {
      this.listDetalleMapeos = res.response.data;
      this.dtTrigger.next(null);
      this.dtTrigger.unsubscribe();
    })
  }

  Finalizar(): void{
    window.location.reload();
 
  }

 
}
