import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit  {

    constructor(){};
    
    panelMenuItems: MenuItem[] = []

    ngOnInit() {
        this.panelMenuItems = [
            {
                label: 'Adminitracion',
                items: [
                    {
                        label: 'Categoria',
                        icon: 'pi pi-fw pi-tags',
                        routerLink: ['/categoria']
                        
                    },
                    {
                        label: 'personas',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/persona']
                        
                    },
                    {
                        label: 'Modulos',
                        icon: 'pi pi-fw pi-tags',
                        
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
    }

    

    
}
