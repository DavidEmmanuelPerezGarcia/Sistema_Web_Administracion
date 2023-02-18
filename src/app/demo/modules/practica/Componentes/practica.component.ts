import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PracticaService } from 'src/app/core/services/practica/practica.service';
// import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Router } from '@angular/router';
import { Practicas } from 'src/app/core/models/practica/practica-response.model';

//modelo
import {InsertPracticaModel} from 'src/app/core/models/practica/practica/insert-practica-model'
import { Practica } from 'src/app/core/models/practica/practica';






@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.scss']
})
export class PracticaComponent implements OnInit {
  listClientes:Practicas[]=[];
  practicaForm: FormGroup;
  public error = '';
  public message = '';
  submitted = false;
  

  constructor(
    public practicaservice:PracticaService,
    private readonly router: Router,
    private FormBuilder: FormBuilder,
    
  ){
    this.practicaForm = FormBuilder.group({
      idSucursal: FormBuilder.control('initial value', Validators.required),
      mueble: FormBuilder.control('initial value', Validators.required),
      zona: FormBuilder.control('initial value', Validators.required),
      nombreUsuario: FormBuilder.control('initial value', Validators.required),
    })
  }

  get form(): any {
    return this.practicaForm.controls;
  }

  ngOnInit(): void {
   this.Reset();
   this.practicaForm.reset({idSucursal: 1});
  }

  Reset():void {
    this.practicaForm.reset({
      nombreUsuario:'',
      mueble:'',
      zona:''
     
    });
  }


  // metodo para insertar los datos
  onSubmit():void{
    
    
    
   
  }

  //Metodo para cargar los datos
  cargarDatos(): void {
    alert("Vamos !!!")
    if(this.practicaForm.controls){
      const request1: Practica = {
        idSucursal: this.practicaForm.controls['idSucursal'].value
      }
      this.practicaservice.getPractica(request1).subscribe(res => {
        this.listClientes = res.response.data;
      })
    }else if(this.practicaForm.invalid){
      return;
    }
    
  }

  // PARA ENVIAR DATOS
  Insertar():void{
    if(this.practicaForm.invalid){
      this.error = "!Valida Campos!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    this.error='';
    const request:InsertPracticaModel={
      id:0,
      mueble:this.practicaForm.controls['mueble'].value,
      nombreUsuario:this.practicaForm.controls['nombreUsuario'].value,
      zona:this.practicaForm.controls['zona'].value
    }
    this.practicaservice.insertPractica(request).subscribe(res => {
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

  LogOut():void {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }
}
