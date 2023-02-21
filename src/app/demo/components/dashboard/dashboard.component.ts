import { Component, OnInit, OnDestroy } from '@angular/core';
import { Categorias, MenuItem } from 'primeng/api';

// Services //
import { categoriaService } from 'src/app/demo/core/services/categoria/categoria.service';
import { Categoria } from 'src/app/demo/core/models/Admin/categoria/getCategoriasResponse.model';
import { getCategoriaRequest } from 'src/app/demo/core/models/Admin/categoria/getCategorias.model';



@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit  {

    title=""

    constructor(private cagoriaSercive:categoriaService){};

    listCategoria:Categorias[]=[]
    panelCategoria:Categoria[]=[]
    
    panelMenuItems: MenuItem[] = []

    ngOnInit() {
        const request1: getCategoriaRequest = {
            Modulos: ["modulos"]
          }
          this.cagoriaSercive.getCategoria(request1).subscribe(res => {
            this.panelCategoria = res.response.data;
          })
        
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

        this.listCategoria=[
            {
                label: 'Adminitracion',
               
                items: [
                    {
                        styleClass:'card m-3 border-1 surface col-3',
                        label: "categoria",
                        routerLink: ['/categoria'],
                    },
                ]
            }
        ]
    }

    

    
}
