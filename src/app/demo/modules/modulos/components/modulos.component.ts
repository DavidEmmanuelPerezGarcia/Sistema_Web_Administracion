import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Personas } from 'src/app/core/models/personas/get-personas-response-modules';

// Models //
import { InsertModulosRequest } from 'src/app/demo/core/models/modulos/insert-modulos.model';
import { GetModulosResponse, Modulos } from 'src/app/demo/core/models/modulos/get-modulos-response-modules';
import { getModulosRequest } from 'src/app/demo/core/models/modulos/get-modulos.model';


// Services //
import { ModulosService } from 'src/app/demo/core/services/modulos/modulos.service';


@Component({
    selector: 'app-modulos',
    templateUrl: './modulos.component.html',
    styleUrls: ['./modulos.component.scss']
  })
  export class ModulosComponent implements OnInit {
    listModulos: Modulos[] = [];
    submitted = false;
  
    
    modulosForm: FormGroup;
    public error = '';
    public message = '';
  
    constructor(
      //private http: HttpClient,
      private modulosService: ModulosService,
      private readonly router: Router,
      private FormBuilder: FormBuilder,
    ) {
      this.modulosForm = FormBuilder.group({
        nombre: FormBuilder.control('initial value', Validators.required),
        categoria: FormBuilder.control('initial value', Validators.required),
        descripcion: FormBuilder.control('initial value', Validators.required),
        tema: FormBuilder.control('initial value', Validators.required),
        ruta: FormBuilder.control('initial value', Validators.required),
        icono: FormBuilder.control('initial value', Validators.required),
        nombreCategoria: FormBuilder.control('initial value', Validators.required),
      });
    }
  
    get form(): any {
      return this.modulosForm.controls;
    }
  
    ngOnInit(): void {
      this.Reset();
      this.modulosForm.get('nombreCategoria')?.disable();
      //this.modulosForm.reset({idSucursal: 1});
    }
  
    onSubmit(): void {
      if(this.modulosForm.invalid){
        this.error = "!Valida Campos!";
        setTimeout(()=>{
          this.error = "";
        }, 3000);
        return;
      }
      this.error = "";
      const request: InsertModulosRequest = {
        id: 0,
        nombre: this.modulosForm.controls['nombre'].value,
        categoria: this.modulosForm.controls['categoria'].value,
        descripcion: this.modulosForm.controls['descripcion'].value,
        tema: this.modulosForm.controls['tema'].value,
        ruta: this.modulosForm.controls['ruta'].value,
        icono: this.modulosForm.controls['icono'].value,
        nombreCategoria: this.modulosForm.controls['nombreCategoria'].value,

      }
      this.modulosService.insertModulos(request).subscribe(res => {
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
  
    Cargar(): void {
      if(this.modulosForm.controls){
        const request: getModulosRequest = {
          id: ["id"]
        }
    
        this.modulosService.getModulos(request).subscribe(res => {
          this.listModulos = res.response.data;
        })
      }else if(this.modulosForm.invalid){
        return;
      }
    }
  
  
    Reset():void {
      var dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      this.modulosForm.reset({
        nombre: '',
        descripcion: '',
        categoria: '',
        tema: '',
        icono: '',
        ruta: '',
      });
    }
    
    LogOut():void {
      localStorage.clear();
      this.router.navigate(['/auth'])
    }
  }