import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from "angular-datatables";

import { ClientesComponent } from "./clientes.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientesRoutingModule } from "./clientes-routing.module";

@NgModule({
    declarations:[
        ClientesComponent
    ],

    imports:[
        CommonModule,
        FormsModule,
        ClientesRoutingModule,
        ReactiveFormsModule,
        DataTablesModule 
    ]
})

export class ClientesModule{}