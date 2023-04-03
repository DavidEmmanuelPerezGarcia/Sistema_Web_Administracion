import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InsertMedicosRequest } from 'src/app/demo/core/models/medicos/insert-medicos.model'
import { getMedicosRequest } from 'src/app/demo/core/models/medicos/get-medicos.model';
import { Medicos } from 'src/app/demo/core/models/medicos/get-medicos-response.model';

import { MedicosService } from 'src/app/demo/core/services/medicos/medicos.service'
import { updateMedicosRequest } from 'src/app/demo/core/models/medicos/update-medicos.model';
import { getMedicoByIdRequest } from 'src/app/demo/core/models/medicos/get-medicosById.model';
import { MedicosById } from 'src/app/demo/core/models/medicos/get-medicosById-response.model';



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  medicoGet:MedicosById[]=[]
  id="0"

  listMedicos: Medicos[] = [];
  sumitted = false;

  medicosForm: FormGroup;
  medicosUpdateForm: FormGroup;
  public error = '';
  public message = '';

  constructor(private MedicosService: MedicosService,
    private route:ActivatedRoute,
    private router: Router,
    private FormBuilder: FormBuilder,) {
    this.medicosForm = FormBuilder.group({
      nombre: FormBuilder.control('initial value', Validators.required),
      apPaterno: FormBuilder.control('initial value', Validators.required),
      apMaterno: FormBuilder.control('initial value', Validators.required),
      numero: FormBuilder.control('initial value', Validators.required),
      cedula: FormBuilder.control('initial value', Validators.required),
      domicilio: FormBuilder.control('initial value', Validators.required),
      telefono: FormBuilder.control('initial value', Validators.required),
      telefonoCasa: FormBuilder.control('initial value', Validators.required)
    }),
      this.medicosUpdateForm = FormBuilder.group({
        id: FormBuilder.control('', Validators.required),
        nombre: FormBuilder.control('', Validators.required),
        apPaterno: FormBuilder.control('', Validators.required),
        apMaterno: FormBuilder.control('', Validators.required),
        numero: FormBuilder.control('', Validators.required),
        cedula: FormBuilder.control('', Validators.required),
        domicilio: FormBuilder.control('', Validators.required),
        telefono: FormBuilder.control('', Validators.required),
        telefonoCasa: FormBuilder.control('', Validators.required),
        estatus: FormBuilder.control('', Validators.required)
      })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: { url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json' }
    };
    this.Reset();
    // this.medicosUpdateForm.reset({Id: 1});

    // mostrar los datos de medicos
    if (this.medicosForm.controls) {
      const request: getMedicosRequest = {
        id: 1
      }
      this.MedicosService.getMedicos(request).subscribe(res => {
        this.listMedicos = res.response.data;
      })
    } else if (this.medicosForm.invalid) {
      return;
    }
    
    
  }

  get form(): any {
    return this.medicosForm.controls;
  }
  get formUpdate(): any {
    return this.medicosUpdateForm.controls;
  }


  onSubmit(): void {
    if (this.medicosForm.invalid) {
      this.error = "!Valida Campos!";
      setTimeout(() => {
        this.error = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertMedicosRequest = {
      id: 0,
      nombre: this.medicosForm.controls['nombre'].value,
      apPaterno: this.medicosForm.controls['apPaterno'].value,
      apMaterno: this.medicosForm.controls['apMaterno'].value,
      numero: this.medicosForm.controls['numero'].value,
      cedula: this.medicosForm.controls['cedula'].value,
      domicilio: this.medicosForm.controls['domicilio'].value,
      telefono: this.medicosForm.controls['telefono'].value,
      telefonoCasa: this.medicosForm.controls['telefonoCasa'].value,
      estatus: 0
    }
    this.MedicosService.insertMedicos(request).subscribe(res => {
      if (res.success == true) {
        this.message = res.message;
        setTimeout(() => {
          this.message = "";
        }, 3000);
        this.Reset();
      } else {
        this.error = res.message;
        setTimeout(() => {
          this.error = "";
        }, 3000);
      }
    })
  }

  Reset(): void {
    // var dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.medicosForm.reset({
      nombre: '',
      apPaterno: '',
      apMaterno: '',
      numero: '',
      cedula: '',
      domicilio: '',
      telefono: '',
      telefonoCasa: ''
    });
  }

  // Actualizar

  actualizar(): void {
    const request: updateMedicosRequest = {
      nombre: this.medicosForm.controls['nombre'].value,
      apPaterno: this.medicosForm.controls['apPaterno'].value,
      apMaterno: this.medicosForm.controls['apMaterno'].value,
      numero: this.medicosForm.controls['numero'].value,
      cedula: this.medicosForm.controls['cedula'].value,
      domicilio: this.medicosForm.controls['domicilio'].value,
      telefono: this.medicosForm.controls['telefono'].value,
      telefonoCasa: this.medicosForm.controls['telefonoCasa'].value,
      estatus: this.medicosUpdateForm.controls['estatus'].value
    }
    this.MedicosService.updateMedicos(request).subscribe(res => {
      if (res.success == true) {
        this.message = res.message;
        setTimeout(() => {
          this.message = "";
        }, 3000);
        this.Reset();
      } else {
        this.error = res.message;
        setTimeout(() => {
          this.error = "";
        }, 3000);
      }
    })
  }

  getMedicoById(id:number): void {
     const request=id;
     this.MedicosService.getMedicosById(request).subscribe(data=>{
    this.medicoGet = data.response.data;
    console.log(this.medicoGet);
     })
  }

  // getMedicoById(id:number): void {
  //    const request=id;
  //    this.MedicosService.getMedicosById(request).subscribe(data=>{
  //   this.medicoGet = data.response.data;
  //   console.log(this.medicoGet);
  //    })
  // }

  // obtenerMedico():void{
  //   this.MedicosService.getMedicosById(this.id).subscribe(res=>{
  //     this.medicoGet = res.response.data;
  //     this.medicosUpdateForm.patchValue(this.medicoGet);
  //   })
  // }

  CambiarActivoMedico():void{
    
  }
 
  
}
