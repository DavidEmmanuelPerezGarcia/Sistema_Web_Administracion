import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteById, GetClienteByIdRequest } from 'src/app/demo/core/models/clientes';
import { Clientes } from 'src/app/demo/core/models/clientes/get-clientes-response-modules';
import { getClientesRequest } from 'src/app/demo/core/models/clientes/get-clientes.model';
import { InsertClienteRequest } from 'src/app/demo/core/models/clientes/insert-clientes.model';
import { UpdateClienteRequest } from 'src/app/demo/core/models/clientes';
import { ClientesService } from 'src/app/demo/core/services/clientes/clientes.service';
import { DeleteCliente } from 'src/app/demo/core/models/clientes';
import { Subject, Subscriber } from 'rxjs';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  submitted = false;

  listClientes:Clientes[]=[]
  clientes:ClienteById[]=[]

  clientesForm: FormGroup;
  public error = '';
  public message = ''

  constructor( 
    private readonly router: Router,
    private FormBuilder: FormBuilder,
    private clientesService:ClientesService
    ){
      this.clientesForm=FormBuilder.group({
        id: FormBuilder.control(''),
        nombre: FormBuilder.control('initial value', Validators.required),
        rfc: FormBuilder.control('initial value', Validators.required),
        condicionPago: FormBuilder.control('initial value', Validators.required),
        limiteCredito: FormBuilder.control('initial value', Validators.required),
        correo: FormBuilder.control('initial value', Validators.required),
        direccion: FormBuilder.control('initial value', Validators.required),
        telefono: FormBuilder.control('initial value', Validators.required),
        codPostal: FormBuilder.control('initial value', Validators.required),
        ciudad: FormBuilder.control('initial value', Validators.required),
        colonia: FormBuilder.control('initial value', Validators.required),
        representante: FormBuilder.control('initial value', Validators.required),
        banco: FormBuilder.control('initial value', Validators.required),
        cuenta: FormBuilder.control('initial value', Validators.required),
        comentarios: FormBuilder.control('initial value', Validators.required),
        contacto: FormBuilder.control('initial value', Validators.required),
        regimen: FormBuilder.control('initial value', Validators.required),
      });
    }

    get form():any{
      return this.clientesForm.controls;
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    };
    
    this.Reset();
    this.clientesForm.reset({Id: 1});

   this.Cargar();
  }

  Reset():void{
    this.clientesForm.reset();
  }
  onSubmit(): void {
    if(this.clientesForm.invalid){
      this.error = "!Valida Campos!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertClienteRequest = {
      id: 0,
      nombre: this.clientesForm.controls['nombre'].value,
      rfc: this.clientesForm.controls['rfc'].value,
      condicionPago: this.clientesForm.controls['condicionPago'].value,
      limiteCredito: this.clientesForm.controls['limiteCredito'].value,
      correo: this.clientesForm.controls['correo'].value,
      direccion: this.clientesForm.controls['direccion'].value,
      telefono: this.clientesForm.controls['telefono'].value,
      codPostal: this.clientesForm.controls['codPostal'].value,
      ciudad: this.clientesForm.controls['ciudad'].value,
      colonia: this.clientesForm.controls['colonia'].value,
      representante: this.clientesForm.controls['representante'].value,
      banco: this.clientesForm.controls['banco'].value,
      cuenta: this.clientesForm.controls['cuenta'].value,
      comentarios: this.clientesForm.controls['comentarios'].value,
      usuario:Number(localStorage.getItem('idUsuario')),
      contacto: this.clientesForm.controls['contacto'].value,
       regimen: this.clientesForm.controls['regimen'].value,
      activo: 1
    }

    this.clientesService.insertClientes(request).subscribe(res => {
      if(res.success == true){
        this.message = res.message;
        setTimeout(()=>{
          this.message = "";
        }, 3000);
        this.Reset();
        this.Cargar();
      }else{
        this.error = res.message;
        setTimeout(()=>{
          this.error = "";
        }, 3000);
      }
    })
  }

  Cargar():void{
    const request: getClientesRequest = {
      id:1,
      nombreCliente:""
      
    }

    this.clientesService.getclientes(request).subscribe(res => {
      this.listClientes = res.response.data;
      this.dtTrigger.next(null);
      this.dtTrigger.unsubscribe();
    })
  }

  editar(clientes:Clientes):void{
  const request:GetClienteByIdRequest={
    IdCliente:clientes.Id,

  }

  this.clientesService.getClienteById(request).subscribe(res=>{
    let cliente = res.response.data;

    cliente.forEach(item=>{
      this.clientesForm.reset({
      id:item.Id,
      nombre: item.Nombre,
      rfc: item.Rfc,
      condicionPago: item.CondicionPago,
      limiteCredito: item.LimiteCredito,
      correo: item.Correo,
      direccion: item.DireccionFiscal,
      telefono: item.Telefono,
      codPostal: item.CodPostal,
      ciudad: item.Ciudad,
      colonia: item.Colonia,
      representante: item.Representante,
      banco: item.Banco,
      cuenta: item.Cuenta,
      comentarios: item.Comentarios,
      // usuario: this.clientesForm.controls['usuario'].value,
      contacto: item.Contacto,
      regimen:item.Regimen
      });
    });
  });
  }

  actualizar(): void {
    if(this.clientesForm.invalid){
      this.error = "!Seleciona datos a editar!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    // const request2: getMedicoByIdRequest = {
    //   id: medicos.Id
    // }
    // this.MedicosService.getMedicosById(request2).subscribe(res => {
    //   let Medico = res.response.data;
    // })
    const request: UpdateClienteRequest = {
      id: this.clientesForm.controls['id'].value,
      nombre: this.clientesForm.controls['nombre'].value,
      rfc: this.clientesForm.controls['rfc'].value,
      condicionPago: this.clientesForm.controls['condicionPago'].value,
      limiteCredito: this.clientesForm.controls['limiteCredito'].value,
      correo: this.clientesForm.controls['correo'].value,
      direccion: this.clientesForm.controls['direccion'].value,
      telefono: this.clientesForm.controls['telefono'].value,
      codPostal: this.clientesForm.controls['codPostal'].value,
      ciudad: this.clientesForm.controls['ciudad'].value,
      colonia: this.clientesForm.controls['colonia'].value,
      representante: this.clientesForm.controls['representante'].value,
      banco: this.clientesForm.controls['banco'].value,
      cuenta: this.clientesForm.controls['cuenta'].value,
      comentarios: this.clientesForm.controls['comentarios'].value,
      usuario:Number(localStorage.getItem('idUsuario')),
      contacto: this.clientesForm.controls['contacto'].value,
       regimen: this.clientesForm.controls['regimen'].value,
       activo:1
    }
    this.clientesService.updateCliente(request).subscribe(res => {
      if (res.success == true) {
        this.message = res.message;
        setTimeout(() => {
          this.message = "";
        }, 3000);
        this.Reset();
        this.Cargar();
      } else {
        this.error = res.message;
        setTimeout(() => {
          this.error = "";
        }, 3000);
      }
    })
  }

  // CambiarActivoMedico(cambiarEstatus:DeleteCliente):void{
  //   const request: getClientesRequest = {
  //     id: 1,
  //     nombreCliente:"",
      
  //   }

  //   this.clientesService.deleteCliente(cambiarEstatus.id,cambiarEstatus.activo).subscribe(() => {
  //      this.clientesService.getclientes(request).subscribe(res=>{
    
  //     const cliente = this.listClientes.find(item => item.Id === cambiarEstatus.id);
  //     if (cliente && cambiarEstatus.activo == 1) {
  //       // medico.BtnActivo = '<button type="button" class="btn btn-danger" (click)="CambiarActivoMedico(' + medico.Id + ',0)"></button>';
  //       cliente.activo = 0;
  //       this.listClientes=res.response.data
  //     } else if(cliente) {
  //       // medico.BtnActivo = '<button type="button" class="btn btn-success" (click)="CambiarActivoMedico(' + medico.Id + ',1)"></button>';
  //       cliente.activo = 1;
  //     }
  //     })
  //     // this.MedicosService.getMedicos(request).subscribe(res=>{
  //     // this.listMedicosDelete=res.response.data
  //     // })
  //   })
  // }

  refrescar(): void{
    window.location.reload();
 }
}
