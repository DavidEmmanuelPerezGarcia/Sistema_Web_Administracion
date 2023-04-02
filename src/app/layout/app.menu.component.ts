import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,private readonly router: Router) { }

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
                    { label: 'Cambiar contraseña', icon: 'pi pi-fw pi-key', routerLink: [''] }
                ]
            },
            {
               
                items: [
                    { label: 'Cerrar sesion', icon: 'pi pi-fw pi-sign-out', command: () => this.LogOut() }
                ]
            },
        
        ];
    }

    LogOut():void {
        localStorage.clear();
        this.router.navigate(['/'])
      }
}
