import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {InsertPersonasResponse, InsertPersonasRequest, 
  GetPersonasResponse, getPersonasRequest, Personas,
  UpdatePersonasResponse, updatePersonasRequest, PersonasUpdate,
  GetPersonByIdRequest, GetPersonByIdResponse,
  DeletePersonas, deletePersonasRequest, DeletePersonasResponse} from 'src/app/demo/core/models/personas/index'; 

// Services //
import { PersonasService } from 'src/app/demo/core/services/personas/personas.service';
import { Subject, Subscriber } from 'rxjs';
import { updateMedicosRequest } from 'src/app/demo/core/models/medicos/update-medicos.model';





@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.scss']
  })
  export class PersonasComponent implements  OnInit ,OnDestroy {
    dtOptions: DataTables.Settings = {};
    dtTrigger:Subject<any>=new Subject<any>();
    listPersonas: Personas[] = [];
    listPersonasUpdate: PersonasUpdate[] = [];
    submitted = false;
    isDataTable=true
  
    
    personasForm: FormGroup;
    public error = '';
    public message = '';
  
    constructor(
      //private http: HttpClient,
      private personasService: PersonasService,
      private readonly router: Router,
      private FormBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute
    ) {
      this.personasForm = FormBuilder.group({
        id: FormBuilder.control('', Validators.required),
        nombre: FormBuilder.control('', Validators.required),
        apPaterno: FormBuilder.control('', Validators.required),
        apMaterno: FormBuilder.control('', Validators.required),
        perfil: FormBuilder.control('', Validators.required),
        idSede: FormBuilder.control('', Validators.required),
        nombreUsuario: FormBuilder.control('', Validators.required),
        nombreSede: FormBuilder.control('', Validators.required),
      });
    }
  

    ngOnInit(): void {
      this.dtOptions= {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
        
      };  
      this.Mostrar();  
      this.Reset();
      this.personasForm.get('idUsuario')?.disable();
      this.personasForm.get('nombreUsuario')?.disable();
      this.personasForm.get('nombreSede')?.disable();   
      this.personasForm.reset({idSucursal: 1});

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
    
    Mostrar(): void {
      if(this.personasForm.controls){
          const request: getPersonasRequest = {
            id: ""
          }
          this.personasService.getPersonas(request).subscribe(res => {
            this.listPersonas = res.response.data;
            this.dtTrigger.next(null);
            this.dtTrigger.unsubscribe();
          })
        }else if(this.personasForm.invalid){
          return;
        }
    }

    // Update():void{
    //   if(this.personasForm.invalid){
    //     this.error = "!Seleciona datos a editar!";
    //     setTimeout(()=>{
    //       this.error = "";
    //     }, 3000);
    //     return;
    //   }
    //   this.error = "";
    //   const request: updatePersonasRequest = {
    //     id: 0,
    //     // idUsuario: 0,
    //     nombre: this.personasForm.controls['nombre'].value,
    //     apPaterno: this.personasForm.controls['apPaterno'].value,
    //     apMaterno: this.personasForm.controls['apMaterno'].value,
    //     perfil: this.personasForm.controls['perfil'].value,
    //     idSede: this.personasForm.controls['idSede'].value,
    //     // nombreUsuario: this.personasForm.controls['nombreUsuario'].value,
    //     // nombreSede: this.personasForm.controls['nombreSede'].value,
    //   }
    //   this.personasService.updatePersonas(request).subscribe(res => {
    //     if(res.success == true){
    //       this.message = res.message;
    //       setTimeout(()=>{
    //         this.message = "";
    //       }, 3000);
    //       this.Reset();
    //     }else{
    //       this.error = res.message;
    //       setTimeout(()=>{
    //         this.error = "";
    //       }, 3000);
    //     }
    //   })
    // }
        
    EditarPersona(persona:Personas):void{
        const request: GetPersonByIdRequest = {
          Id: persona.Id
        }
        this.personasService.getPersonById(request).subscribe(res => {
          let Persona = res.response.data;

          Persona.forEach(item => {
            this.personasForm.reset({
              id:item.Id,
              nombre: item.Nombre,
              apPaterno: item.ApPaterno,
              apMaterno: item.ApMaterno,
              perfil: item.Perfil,
              idSede: item.IdSede,
            });
          });        
        });
    }
  
    DeletePersona(eliminar:DeletePersonas):void{
        this.personasService.deletePersonas(eliminar.Id).subscribe(() => {
         this.Mostrar();
        })
    }
   
    onSubmit(): void {
      if(this.personasForm.invalid){
        this.error = "!Valida Campos!";
        setTimeout(()=>{
          this.error = "";
        }, 3000);
        return;
      }
      this.error = "";
      const request: InsertPersonasRequest = {
        // id: 0,
        // idUsuario: 0,
        nombre: this.personasForm.controls['nombre'].value,
        apPaterno: this.personasForm.controls['apPaterno'].value,
        apMaterno: this.personasForm.controls['apMaterno'].value,
        perfil: this.personasForm.controls['perfil'].value,
        idSede: this.personasForm.controls['idSede'].value,
        nombreUsuario: this.personasForm.controls['nombreUsuario'].value,
        nombreSede: this.personasForm.controls['nombreSede'].value,

      }
      this.personasService.insertPersonas(request).subscribe(res => {
        if(res.success == true){
          this.message = res.message;
          setTimeout(()=>{
            this.message = "";
          }, 3000);
          this.Reset();
          this.Mostrar();
          this.ngOnDestroy()
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
      this.personasForm.reset({
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        perfil: localStorage.getItem('perfil'),
        nombreSede: localStorage.getItem('nombreSede'),
      });
    }
    
    LogOut():void {
      localStorage.clear();
      this.router.navigate(['/auth'])
    }

    actualizar(): void {
      if(this.personasForm.invalid){
        this.error = "!Seleciona datos a editar!";
        setTimeout(()=>{
          this.error = "";
        }, 3000);
        return;
      }
      const request: updatePersonasRequest = {
        id: this.personasForm.controls['id'].value,
        nombre: this.personasForm.controls['nombre'].value,
        apPaterno: this.personasForm.controls['apPaterno'].value,
        apMaterno: this.personasForm.controls['apMaterno'].value,
        perfil: this.personasForm.controls['perfil'].value,
        idSede: this.personasForm.controls['idSede'].value,
        // nombreUsuario: this.personasForm.controls['nombreUsuario'].value,
        // nombreSede: this.personasForm.controls['nombreSede'].value,
      }
      this.personasService.updatePersonas(request).subscribe(res => {
        if (res.success == true) {
          this.message = res.message;
          setTimeout(() => {
            this.message = "";
          }, 3000);
          this.Reset();
          this.Mostrar();
        } else {
          this.error = res.message;
          setTimeout(() => {
            this.error = "";
          }, 3000);
        }
      })
    }
  }