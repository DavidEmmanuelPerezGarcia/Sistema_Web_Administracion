import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MapeosRequest } from 'src/app/demo/core/models/mapeos/getMapeos';
import { Mapeos } from 'src/app/demo/core/models/mapeos/getMapeosResponse.model';

// Models //
import { InsertMapeosRequest } from 'src/app/demo/core/models/mapeos/insert-mapeos.model';
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
  public error = '';
  public message = '';

  constructor(
    private mapeosService: MapeosService,
    private readonly router: Router,
    private FormBuilder: FormBuilder,
  ) {
    this.mapeosForm = FormBuilder.group({
      idArea: FormBuilder.control('initial value', Validators.required),
      idSucursal: FormBuilder.control('initial value', Validators.required),
      idUsuario: FormBuilder.control('initial value', Validators.required),
      mueble: FormBuilder.control('initial value', Validators.required),
      zona: FormBuilder.control('initial value', Validators.required),
      cara: FormBuilder.control('initial value', Validators.required),
      area: FormBuilder.control('initial value', Validators.required),
      sucursal: FormBuilder.control('initial value', Validators.required),
      nombreUsuario: FormBuilder.control('initial value', Validators.required),
      fecha: FormBuilder.control('initial value', Validators.required),
      estado: FormBuilder.control('initial value', Validators.required),
      tipo: FormBuilder.control('initial value', Validators.required),

      codigo: FormBuilder.control('initial value', Validators.required),
      descripcionArticulo: FormBuilder.control('initial value', Validators.required),
      estante: FormBuilder.control('initial value', Validators.required),
      consecutivo: FormBuilder.control('initial value', Validators.required),
    });
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
    this.mapeosForm.get('idUsuario')?.disable();
    this.mapeosForm.get('nombreUsuario')?.disable();
    this.mapeosForm.get('codigo')?.disable();
    this.mapeosForm.get('descripcionArticulo')?.disable();
    this.mapeosForm.get('estante')?.disable();
    this.mapeosForm.get('consecutivo')?.disable();
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
      id: 0,
      idArea: this.mapeosForm.controls['idArea'].value,
      idSucursal: this.mapeosForm.controls['idSucursal'].value,
      idUsuario: this.mapeosForm.controls['idUsuario'].value,
      mueble: this.mapeosForm.controls['mueble'].value,
      zona: this.mapeosForm.controls['zona'].value,
      cara: this.mapeosForm.controls['cara'].value,
      area: this.mapeosForm.controls['area'].value,
      sucursal: this.mapeosForm.controls['sucursal'].value,
      nombreUsuario: this.mapeosForm.controls['nombreUsuario'].value,
      fecha: this.mapeosForm.controls['fecha'].value,
      estado: this.mapeosForm.controls['estado'].value,
      tipo: this.mapeosForm.controls['tipo'].value,
    }
    this.mapeosService.insertMapeos(request).subscribe(res => {
      if(res.success == true){
        this.message = res.message;
        setTimeout(()=>{
          this.message = "";
        }, 3000);
        this.Reset();
      }else{
        this.error = res.message;
        setTimeout(()=>{
          this.error = "";
        }, 3000);
      }
    })
  }

  Reset():void {
    var dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.mapeosForm.reset({
      idArea: 0,
      idSucursal: 0,
      idUsuario: localStorage.getItem('idUsuario'),
      mueble: '',
      zona: '',
      cara: '',
      area: '',
      sucursal: '',
      nombreUsuario: localStorage.getItem('nombreUsuario'),
      fecha: dateNow,
      estado: '',
      tipo: 0,


      codigo: "",
      descripcionArticulo: "",
      estante: "",
      consecutivo: "",


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
    if(this.mapeosForm.controls){
      const request: getDetallesMapeosRequest = {
        IdMapeos: 2
      }
      this.mapeosService.getDetalleMapeo(request).subscribe(res => {
        this.listDetalleMapeos = res.response.data;
        this.dtTrigger.next(null);
        this.dtTrigger.unsubscribe();
      })
    }else if(this.mapeosForm.invalid){
      return;
    }
  }

  refrescar(): void{
    window.location.reload();
 }
}
