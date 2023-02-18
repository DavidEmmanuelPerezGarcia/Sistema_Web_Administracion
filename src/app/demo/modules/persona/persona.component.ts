import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { InsertpersonaRequest } from 'src/app/demo/core/models/persona/insert-persona.model';

// Services //
import { personaService } from 'src/app/demo/core/services/persona/personaService.service';
import { GetPersonaRequest } from '../../core/models/persona/get-persona.model';
import { Persona } from '../../core/models/persona/getPersonaResponse.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  listaPersona: Persona[]=[];

  public error = '';
  public message = '';
  personaForm:FormGroup;
  
  constructor(
    private FormBuilder: FormBuilder,
    private readonly router: Router,
    private personaService:personaService
    ){
    this.personaForm = FormBuilder.group({
      nombre: FormBuilder.control('initial value', Validators.required),
      apPaterno: FormBuilder.control('initial value', Validators.required),
      apMaterno: FormBuilder.control('initial value', Validators.required),
      perfil: FormBuilder.control('initial value', Validators.required),
      nombreSede: FormBuilder.control('initial value', Validators.required),
    });
  }

  get form(): any {
    return this.personaForm.controls;
  }
  ngOnInit(): void {
    this.Reset();
    
  }

  onSubmit(): void {
    if(this.personaForm.invalid){
      this.error = "!Valida Campos!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertpersonaRequest = {
      id: 0,
      nombre: this.personaForm.controls['nombre'].value ,
      apPaterno: this.personaForm.controls['apPaterno'].value,
      apMaterno: this.personaForm.controls['apMaterno'].value,
      perfil: this.personaForm.controls['perfil'].value,
      nombreSede: this.personaForm.controls['nombreSede'].value,
      
    }
    this.personaService.insertPersona(request).subscribe(res => {
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

  Reset():void{
    // var dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.personaForm.reset({
     nombre:'',
     apPaterno:'',
     apMaterno:'',
     perfil:0,
     nombreSede:0
    });
  }

  LogOut():void {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  cargarDatos():void{

    if(this.personaForm.controls){

      const request: GetPersonaRequest = {
        id: ["id"]
      }
      this.personaService.getPersona(request).subscribe(res => {
        this.listaPersona = res.response.data;
        console.log(this.listaPersona)
      })
    }else if(this.personaForm.invalid){
      return;
    }
   
   
  }
}
