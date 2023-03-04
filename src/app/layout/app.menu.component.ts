import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Opciones de navegacion',
                items: [
                    { label: 'Panel de control', icon: 'pi pi-fw pi-palette', routerLink: ['dashboard'] }
                ]
            },
            {
              
                items: [
                    { label: 'Agenda semanal', icon: 'pi pi-fw pi-calendar', routerLink: [''] }
                ]
            },
            {
               
                items: [
                    { label: 'Cambiar contraseña', icon: 'pi pi-fw pi-key', routerLink: [''] }
                ]
            },
            {
               
                items: [
                    { label: 'Cerrar sesion', icon: 'pi pi-fw pi-sign-out', routerLink: [''] }
                ]
            },
        
        ];
    }
}
