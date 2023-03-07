import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/demo/core/services/auth/auth.service";
@Injectable()
export class LoginGuardian implements CanActivate{


    constructor(private loginService:AuthService,
                private router:Router){}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    // const token = localStorage.getItem('token');
    if (!this.loginService.isAutenticado()) {
      this.router.navigate(['/login']);
      return false;
     
    } else {
      return true;
    }
  }
    }
