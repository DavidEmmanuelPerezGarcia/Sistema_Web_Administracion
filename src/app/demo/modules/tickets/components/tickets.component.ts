import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// Models //
import { getTicketsRequest } from 'src/app/demo/core/models/tickets/get-tickets.model';
import { Tickets } from 'src/app/demo/core/models/tickets/get-tickets-response-modules';


// Services //
import { TicketsService } from 'src/app/demo/core/services/tickets/tickets.service';

import { Subject, Subscriber } from 'rxjs';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
  })
  export class TicketsComponent implements  OnInit {
    dtOptions: DataTables.Settings = {};
    dtTrigger:Subject<any>=new Subject<any>();


    listTickets: Tickets[] = [];
    submitted = false;
  
    
    ticketsForm: FormGroup;
    public error = '';
    public message = '';
  
    constructor(
      //private http: HttpClient,
      private ticketsService: TicketsService,
      private readonly router: Router,
      private FormBuilder: FormBuilder,
      private TicketsService:TicketsService) {
      this.ticketsForm = FormBuilder.group({
        idCliente: FormBuilder.control('initial value', Validators.required),
        fechaInicial: FormBuilder.control('initial value', Validators.required),
        fechaFinal: FormBuilder.control('initial value', Validators.required),
        sucursal: FormBuilder.control('initial value', Validators.required),
        tipo: FormBuilder.control('initial value', Validators.required),
        folio: FormBuilder.control('initial value', Validators.required),
        idSucursal: FormBuilder.control('initial value', Validators.required),
        fecha: FormBuilder.control('initial value', Validators.required),
        total: FormBuilder.control('initial value', Validators.required),
      });
    }
  
    get form(): any {
      return this.ticketsForm.controls;
    }
  
    ngOnInit(): void {
      this.dtOptions= {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
      };
        if(this.ticketsForm.controls){
          const request1: getTicketsRequest = {
            fechaInicial: "2023-02-01",
            fechaFinal: "2023-02-02",
            sucursal: "2",
            tipo: "1",
           }
           this.TicketsService.getTickets(request1).subscribe(res => {
             this.listTickets = res.response.data;
             this.dtTrigger.next(null);
             this.dtTrigger.unsubscribe();
           })
         }else if(this.ticketsForm.invalid){
           return;
         }
    
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
  
  
   
    
    LogOut():void {
      localStorage.clear();
      this.router.navigate(['/auth'])
    }
  }