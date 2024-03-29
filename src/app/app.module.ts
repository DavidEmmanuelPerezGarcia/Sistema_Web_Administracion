import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { FormsModule } from '@angular/forms';
import { PanelMenuService } from './demo/core/services/panel-menu/panel-menu.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ErrorInterceptor } from 'src/app/demo/core/interceptors/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginGuardian } from './demo/modules/auth/components/login/login-guardian.service';
import { AuthService } from './demo/core/services/auth/auth.service';
import { MaterialModule } from './demo/material/material.module';
import { LayoutModule } from './demo/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, LoadingComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        MaterialModule,
        LayoutModule,
        DataTablesModule,
        BrowserModule
      
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true},
        // { provide: LocationStrategy, 
        //   useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, PanelMenuService,LoginGuardian,AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
