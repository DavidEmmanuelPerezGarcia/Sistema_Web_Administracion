import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InsertCategoriaResquest } from 'src/app/demo/core/models/Admin/categoria/insert-categoria.model';

// Services //
import { categoriaService } from 'src/app/demo/core/services/categoria/categoria.service';
import { Categoria } from 'src/app/demo/core/models/Admin/categoria/getCategoriasResponse.model';
import { getCategoriaRequest } from 'src/app/demo/core/models/Admin/categoria/getCategorias.model';
import { DeleteCategoria } from '../../core/models/Admin/categoria/deleteCategoriasResponse.model';

import { Subject, Subscriber } from 'rxjs';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  listaCategoria:Categoria[]=[]
  Categoriaform: FormGroup;
  public error = '';
  public message = '';



  constructor(
    private readonly router: Router,
    private FormBuilder: FormBuilder,
    private categoriaService:categoriaService
  ){
    this.Categoriaform = FormBuilder.group({
      nombreCategoria: FormBuilder.control('initial value', Validators.required),
      descripcionCategoria: FormBuilder.control('initial value', Validators.required),
    })
  }

  get form(): any {
    return this.Categoriaform.controls;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'}
    };
    this.Mostrar();
    this.Reset();
    this.Categoriaform.reset({Id: 1});
  }

  Mostrar():void{
    if(this.Categoriaform.controls){
      const request: getCategoriaRequest = {
        Id: 0
      }
      this.categoriaService.getCategoria(request).subscribe(res => {
        this.listaCategoria = res.response.data;
        this.dtTrigger.next(null);
        this.dtTrigger.unsubscribe();
        
      })
    }else if(this.Categoriaform.invalid){
      return;
    }

  }
  
  

  DeleteCategoria(eliminar:DeleteCategoria):void{
    const request: getCategoriaRequest = {
      Id: 0
    }

    this.categoriaService.DeleteCategoria(eliminar.Id).subscribe(() => {
    this.Mostrar();
    })
  }

  onSubmit(): void {
    // alert("funciona")
    if(this.Categoriaform.invalid){
      this.error = "!Valida Campos!";
      setTimeout(()=>{
        this.error = "";
      }, 3000);
      return;
    }
    this.error = "";
    const request: InsertCategoriaResquest = {
       id: 0,
      nombre: this.Categoriaform.controls['nombreCategoria'].value,
      descripcion: this.Categoriaform.controls['descripcionCategoria'].value,
    
    }
    this.categoriaService.insertCategoria(request).subscribe(res => {
      if(res.success == true){
        this.message = res.message;
        setTimeout(()=>{
          this.message = "";
        }, 3000);
        this.Reset();
        this.Mostrar();
      }else{
        this.error = res.message;
        setTimeout(()=>{
          this.error = "";
        }, 3000);
      }
    })
  }

  LogOut():void {
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  Reset():void {
    var dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.Categoriaform.reset({
      nombreCategoria: '',
      descripcionCategoria: ''
      
    });
  }

  refrescar(): void{
    window.location.reload();
  }

 
}
