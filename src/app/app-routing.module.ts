import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginGuardian } from './demo/modules/auth/components/login/login-guardian.service';
import { AuthGuard } from './demo/modules/auth/components/Guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
           
            {path: '', loadChildren:()=> import('./demo/modules/auth/auth.module').then(m => m.AuthModule)},
            // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
           

            {
                path: '', component: AppLayoutComponent,
                children: [
                    
                    { path: 'dashboard',  loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    {path: 'categoria', loadChildren:()=> import('./demo/modules/categoria/categoria.module').then(m => m.CategoriaModule),canActivate:[AuthGuard]},
                    {path: 'personas', loadChildren:()=> import('./demo/modules/personas/personas.module').then(m => m.PersonasModule),canActivate:[AuthGuard]},
                    {path: 'modulos', loadChildren:()=> import('./demo/modules/modulos/modulos.module').then(m => m.ModulosModule),canActivate:[AuthGuard]},
                    {path: 'clientes', loadChildren:()=> import('./demo/modules/clientes/clientes.module').then(m => m.ClientesModule),canActivate:[AuthGuard]},
                  
                ]
          
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
