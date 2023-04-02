import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// Models //
import { InsertPersonasRequest } from 'src/app/demo/core/models/personas/insert-personas.model';
import { getPersonasRequest } from 'src/app/demo/core/models/personas/get-personas.model';
import { Personas } from 'src/app/demo/core/models/personas/get-personas-response-modules';


// Services //
import { PersonasService } from 'src/app/demo/core/services/personas/personas.service';




@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.scss']
  })
  export class PersonasComponent implements  OnInit {
    dtOptions: DataTables.Settings = {};
    

    listPersonas: Personas[] = [];
    submitted = false;

    nombreEdit="David"
    apPaternoEdit="Dperez"
    apMaternoEdit="Matriz"
  
    
    personasForm: FormGroup;
    public error = '';
    public message = '';
  
    constructor(
      //private http: HttpClient,
      private personasService: PersonasService,
      private readonly router: Router,
      private FormBuilder: FormBuilder,
    ) {
      this.personasForm = FormBuilder.group({
        idUsuario: FormBuilder.control('initial value', Validators.required),
        nombre: FormBuilder.control('initial value', Validators.required),
        apPaterno: FormBuilder.control('initial value', Validators.required),
        apMaterno: FormBuilder.control('initial value', Validators.required),
        perfil: FormBuilder.control('initial value', Validators.required),
        idSede: FormBuilder.control('initial value', Validators.required),
        nombreUsuario: FormBuilder.control('initial value', Validators.required),
        nombreSede: FormBuilder.control('initial value', Validators.required),
      });
    }
  
    get form(): any {
      return this.personasForm.controls;
    }
  
    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
      };
      this.Reset();
      this.personasForm.get('idUsuario')?.disable();
      this.personasForm.get('nombreUsuario')?.disable();
      this.personasForm.get('nombreSede')?.disable();
      this.personasForm.reset({idSucursal: 1});
      const request2: getPersonasRequest = {
        Id: ['Id']
      }
      this.personasService.getPersonas(request2).subscribe(res => {
        this.listPersonas = res.response.data;

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
        id: 0,
        idUsuario: 0,
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
        }else{
          this.error = res.message;
          setTimeout(()=>{
            this.error = "";
          }, 3000);
        }
      })
    }

    // Cargar():void{
    
    //   if(this.personasForm.controls){
    //     const request2: getPersonasRequest = {
    //       Id: ['Id']
    //     }
    //     this.personasService.getPersonas(request2).subscribe(res => {
    //       this.listPersonas = res.response.data;

    //     }) 
    //   }else if(this, this.personasForm.invalid){
    //     return;
    //   }
    // }
  
  
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
  }