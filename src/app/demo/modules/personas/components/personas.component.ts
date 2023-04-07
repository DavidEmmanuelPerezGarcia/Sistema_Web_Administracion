import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



// Models //
import { InsertPersonasRequest } from 'src/app/demo/core/models/personas/insert-personas.model';
import { getPersonasRequest } from 'src/app/demo/core/models/personas/get-personas.model';
import { Personas } from 'src/app/demo/core/models/personas/get-personas-response-modules';
import { GetPersonByIdRequest, GetPersonByIdResponse} from 'src/app/demo/core/models/personas';


// Services //
import { PersonasService } from 'src/app/demo/core/services/personas/personas.service';
import { Subscriber } from 'rxjs';
import { DeletePersonas } from 'src/app/demo/core/models/personas/deletePersonasResponse.model';




@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.scss']
  })
  export class PersonasComponent implements  OnInit {
    dtOptions: DataTables.Settings = {};
    listPersonas: Personas[] = [];
    submitted = false;
  
    
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
        idUsuario: FormBuilder.control('', Validators.required),
        nombre: FormBuilder.control('', Validators.required),
        apPaterno: FormBuilder.control('', Validators.required),
        apMaterno: FormBuilder.control('', Validators.required),
        perfil: FormBuilder.control('', Validators.required),
        idSede: FormBuilder.control('', Validators.required),
        nombreUsuario: FormBuilder.control('', Validators.required),
        nombreSede: FormBuilder.control('', Validators.required),
      });
    }
  
    get form(): any {
      return this.personasForm.controls;
    }
    ngOnInit(): void {
        this.dtOptions= {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
        };
      this.Mostrar();  
      this.cargar();
      this.Reset();
      this.personasForm.get('idUsuario')?.disable();
      this.personasForm.get('nombreUsuario')?.disable();
      this.personasForm.get('nombreSede')?.disable();   
      this.personasForm.reset({idSucursal: 1});

  }
    

    Mostrar(): void {
      if(this.personasForm.controls){
          const request: getPersonasRequest = {
            idPersona: ""
         }
     
          this.personasService.getPersonas(request).subscribe(res => {
            this.listPersonas = res.response.data;
          })
        }else if(this.personasForm.invalid){
          return;
        }
      }
   

    cargar(): void {
      this.activatedRoute.params.subscribe(
        e=>{
          let Id=e['Id'];
          if(Id){
            this.personasService.getPersonasid(Id).subscribe(res => {
              this.listPersonas = res.response.data; 
            }
            )}
        }
      );
    }

    update(): void{
      this.personasService.updatePersonas(this.listPersonas).subscribe(res => 
        this.router.navigate(['/personas'])
      )
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

    EditarPersona(persona:Personas):void{
      const request: GetPersonByIdRequest = {
        Id: persona.Id
      }
  
      this.personasService.getPersonById(request).subscribe(res => {
        let Persona = res.response.data;
       
        Persona.forEach(item => {
          this.personasForm.reset({
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
  }