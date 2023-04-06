import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { getCategoriaRequest } from '../../core/models/Admin/categoria/getCategorias.model';
import { Categoria } from '../../core/models/Admin/categoria/getCategoriasResponse.model';
import { Modulos } from '../../core/models/modulos/get-modulos-response-modules';
import { getModulosRequest } from '../../core/models/modulos/get-modulos.model';
import { categoriaService } from '../../core/services/categoria/categoria.service';
import { ModulosService } from '../../core/services/modulos/modulos.service';
import { LayoutService } from '../../../layout/service/app.layout.service';

// Services //
//import { categoriaService } from 'src/app/demo/core/services/categoria/categoria.service';
//import { Categoria } from 'src/app/demo/core/models/Admin/categoria/getCategoriasResponse.model';
//import { getCategoriaRequest } from 'src/app/demo/core/models/Admin/categoria/getCategorias.model';



@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit  {

    constructor(private cagoriaSercive:categoriaService, private modulosService:ModulosService,public layoutService: LayoutService){};

    //listCategoria:Categorias[]=[]
    panelCategoria:Categoria[]=[]
    panelMenuItems: MenuItem[] = []
    listModulos: Modulos[] = [];



    ngOnInit() {
        //const request1: getCategoriaRequest = {
            //Modulos: ["modulos"]
          //}
          //this.cagoriaSercive.getCategoria(request1).subscribe(res => {
            //this.panelCategoria = res.response.data;
         // })
        
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
                        label: 'Personas',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/personas']
                        
                    },
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Modulos',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/modulos']
                        
                    },
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Perfiles',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/perfiles']
                        
                    },
                   
                   
                   
                ]
            },
            {
                label: 'Articulo',
                items: [
                    {
                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Articulos',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/articulos']
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Catalogos',
                items: [
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Medicos',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/medicos']
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Clientes',
                items: [
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Clientes',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/clientes']
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Sistemas',
                items: [
                    {   

                        styleClass:'card m-3 border-1 surface col-8',
                        label: 'Reporte y movimientos de inventario',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/Reporte_y_movimientos_de_inventarios']
                        
                    },
                   
                ]
                    
            },
            {
                label: 'Tickets',
                items: [
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Tickets',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/tickets']
                        
                    },
                   
                ]
                    
            },
           
            {
                label: 'Mapeos',
                items: [
                    {   

                        styleClass:'card m-3 border-1 surface col-5',
                        label: 'Mapeos',
                        icon: 'pi pi-fw pi-tags',
                        routerLink:['/mapeos']
                        
                    },
                   
                ]
                    
            },
           
        ];

       //this.listCategoria=[
            //{
                //label: 'Adminitracion',
                //items: [
                   // {
                        //styleClass:'card m-3 border-1 surface col-3',
                       // label: "categoria",
                       // routerLink: ['/categoria'],
                   // },
               // ]
           // }
        //]
    }

   cargarDatos(){
    const request: getCategoriaRequest = {
        Id: ["Id"]
      }
  
      this.cagoriaSercive.getCategoria(request).subscribe(res => {
        this.panelCategoria = res.response.data;
      })
   } 
}

    

    

