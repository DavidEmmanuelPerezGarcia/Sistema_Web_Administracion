import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  submitted = false;

  // clientesForm: FormGroup
  public error = '';
  public message = ''

  constructor( private readonly router: Router,
    private FormBuilder: FormBuilder){}

  ngOnInit(): void {
   
  }

  Reset():void{}
  onSubmit():void{}
}
