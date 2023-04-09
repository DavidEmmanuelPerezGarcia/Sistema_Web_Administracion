import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteById, GetClienteByIdRequest } from 'src/app/demo/core/models/clientes';
import { Clientes } from 'src/app/demo/core/models/clientes/get-clientes-response-modules';
import { getClientesRequest } from 'src/app/demo/core/models/clientes/get-clientes.model';
import { InsertClienteRequest } from 'src/app/demo/core/models/clientes/insert-clientes.model';
import { ClientesService } from 'src/app/demo/core/services/clientes/clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

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
        usuario: FormBuilder.control('initial value', Validators.required),
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
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    };
    
    this.Reset();
    this.clientesForm.reset({Id: 1});

    if(this.clientesForm.controls){
     
      const request: getClientesRequest = {
        id:1,
        nombreCliente:""
        
      }
  
      this.clientesService.getclientes(request).subscribe(res => {
        this.listClientes = res.response.data;
      })
    }else if(this.clientesForm.invalid){
      return
    }
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
      usuario: this.clientesForm.controls['usuario'].value,
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
      }else{
        this.error = res.message;
        setTimeout(()=>{
          this.error = "";
        }, 3000);
      }
    })
  }

  Cargar():void{
    if(this.clientesForm.controls){
     
      const request: getClientesRequest = {
        id:1,
        nombreCliente:""
        
      }
  
      this.clientesService.getclientes(request).subscribe(res => {
        this.listClientes = res.response.data;
      })
    }else if(this.clientesForm.invalid){
      return
    }
  }

  editar(clientes:Clientes):void{
  const request:getClientesRequest={
    id:clientes.Id,
    nombreCliente:clientes.Nombre
  }

  this.clientesService.getclientes(request).subscribe(res=>{
    let cliente = res.response.data;

    cliente.forEach(item=>{
      this.clientesForm.reset({
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
      });
    });
  });
  }
}
