import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Models //
import { AuthRequest } from 'src/app/demo/core/models/auth/auth.model'

// Services //
import { AuthService } from 'src/app/demo/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  submitted = false;
  public error = '';

  constructor(
    private authService: AuthService,
    private FormBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.loginForm = FormBuilder.group({
      usuario: FormBuilder.control('initial value', Validators.required),
      password: FormBuilder.control('initial value', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loginForm.reset({usuario: 'svillarreal', password:'qK+qIzXDdvK4nsEOOuEk1g=='});
  }

  get form(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if(this.loginForm.invalid){
      return;
    }

    const login: AuthRequest = {
      Username: this.loginForm.controls['usuario'].value,
      Userpassword: this.loginForm.controls['password'].value
    }
    this.authService.auth(login).subscribe(res => {
      const data = res.Response.data;
      if(res.Error == true){
        this.error = res.Message
      }else{
        this.error = '';
        localStorage.setItem('token', data.Token);
        localStorage.setItem('idUsuario', data.Usuario.Id.toString());
        localStorage.setItem('nombreUsuario', data.Usuario.NombreUsuario);
        localStorage.setItem('nombrePersona', data.Usuario.NombrePersona);
        localStorage.setItem('idSucursal', data.Usuario.IdSucursal.toString());
        localStorage.setItem('idPerfil', data.Usuario.IdPerfil.toString());
        localStorage.setItem('nombreSucursal', data.Usuario.NombreSucursal);
        this.router.navigate(['/home'])
      }
    })
  }

}
