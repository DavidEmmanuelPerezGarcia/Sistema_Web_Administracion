import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/demo/core/services/articulos/articulos.service';
import { Articulos } from 'src/app/demo/core/models/articulos/get-articulos-response.model';
import { getArticulosRequest } from 'src/app/demo/core/models/articulos/get-articulos.model';
import { Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  submitted = false;

  listArticulos: Articulos[]=[]

  constructor( private readonly router: Router,
    private FormBuilder: FormBuilder,
    private ArticulosService:ArticulosService){
      this.articulosForm = FormBuilder.group({
        idSucursal: FormBuilder.control('initial value', Validators.required)
      });
    }

    get form():any{
      return this.articulosForm.controls;
    }
  
  articulosForm: FormGroup;
  public error = '';
  public message = ''

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    }; 

    // Mostrar los datos de los articulos

    if(this.articulosForm.controls){
      const request1: getArticulosRequest = {
        idSucursal: this.articulosForm.controls['idSucursal'].value
       }
       this.ArticulosService.getArticulos(request1).subscribe(res => {
         this.listArticulos = res.response.data;
         this.dtTrigger.next(null);
         this.dtTrigger.unsubscribe();
       })
     }else if(this.articulosForm.invalid){
       return;
     }

    this.articulosForm.reset({ idSucursal: 1});
  }

  refrescar(): void{
    window.location.reload();
  }

  Reset():void{

  }


  onSubmit():void{

  }

  // Cargar():void{
  //   if(this.articulosForm.controls){
  //         const request1: getArticulosRequest = {
  //           idSucursal: this.articulosForm.controls['idSucursal'].value
  //          }
  //          this.ArticulosService.getArticulos(request1).subscribe(res => {
  //            this.listArticulos = res.response.data;
  //          })
  //        }else if(this.articulosForm.invalid){
  //          return;
  //        }
  // }
}
