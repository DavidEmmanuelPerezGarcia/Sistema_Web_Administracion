import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Router } from '@angular/router';

// Models //
import { ClientesRequest } from 'src/app/core/models/creditos/clientes/getClientes.model';
import { Clientes } from 'src/app/core/models/creditos/clientes/getClientesResponse.model';

// Services //
import { ClientesService } from 'src/app/core/services/creditos/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listClientes: Clientes[] = [];
  // dtOptions: ADTSettings = {};
  clientesForm: FormGroup;
  submitted = false;
  public error = '';

  constructor(
    private clientesService: ClientesService,
    private FormBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.clientesForm = FormBuilder.group({
      idSucursal: FormBuilder.control('initial value', Validators.required)
    });
  }

  get form(): any {
    return this.clientesForm.controls;
  }

  ngOnInit(): void {
    this.clientesForm.reset({idSucursal: 1});
  }

  LogOut():void {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  onSubmit(): void {
    if(this.clientesForm.invalid){
      return;
    }
    const request: ClientesRequest = {
      idSucursal: this.clientesForm.controls['idSucursal'].value
    }

    this.clientesService.getClientes(request).subscribe(res => {
      this.listClientes = res.response.data;
    })
  }
}
