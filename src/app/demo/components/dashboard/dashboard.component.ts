import { Component, OnInit, OnDestroy } from '@angular/core';
import {  MenuItem } from 'primeng/api';

// Services //
import { categoriaService } from 'src/app/demo/core/services/categoria/categoria.service';
import { Categoria } from 'src/app/demo/core/models/Admin/categoria/getCategoriasResponse.model';
import { getCategoriaRequest } from 'src/app/demo/core/models/Admin/categoria/getCategorias.model';
import { StyleClass } from 'primeng/styleclass';



@Component({

    templateUrl: './dashboard.component.html',
     selector: 'app-panel',
    template:`
    <div>
      <h2>Panel de Módulos</h2>
      <ul>
        <li *ngFor="let c of panelCategoria">{{c}}</li>
      </ul>
    </div>
  `
})
export class DashboardComponent implements OnInit  {

    constructor(private cagoriaSercive:categoriaService){};

    // listCategoria:Categorias[]=[]
    panelCategoria:Categoria[]=[]
    
    panelMenuItems: MenuItem[] = []

    ngOnInit() {
        this.panelMenuItems = [
            {
                label: 'Administracion',
                styleClass:'',
                items: [
                    {
                        style:"grid",
                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Categoria',
                        icon: 'pi pi-fw pi-tags',
                        routerLink: ['/categoria']
                        
                    },
                    {
                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'personas',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/persona']
                        
                    },
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Modulos',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/modulos']
                        
                    },
                   
                   
                ]
            },
            {
                label: 'Articulo',
                items: [
                    {
                        label: 'Tomar proceso de catalogos',
                        icon: 'pi pi-fw pi-tags',
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Catalogos',
                items: [
                    {
                        label: 'Tomar proceso de catalogos',
                        icon: 'pi pi-fw pi-tags',
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Clientes',
                items: [
                    {
                        label: 'Tomar proceso de catalogos',
                        icon: 'pi pi-fw pi-tags',
                        
                    },
                   
                ]
                    
            },
           
        ];

        // this.listCategoria=[
        //     {
        //         label: 'Adminitracion',
        //         items: [
        //             {
        //                 styleClass:'card m-3 border-1 surface col-3',
        //                 label: "categoria",
        //                 routerLink: ['/categoria'],
        //             },
        //         ]
        //     }
        // ]
    }

   cargarDatos(){
    const request1: getCategoriaRequest = {
        Id:0
      }
      this.cagoriaSercive.getCategoria(request1).subscribe(res => {
        this.panelCategoria = res.response.data;    
      })
   }

    

    
}
