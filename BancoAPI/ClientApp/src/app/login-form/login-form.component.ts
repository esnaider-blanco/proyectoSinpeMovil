import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { clientLogin } from '../models/clientLogin.model';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  login : clientLogin

  constructor(
    private _snackBar: MatSnackBar,
    private services: ServicesService,
    private http: HttpClient,
    public fb: FormBuilder,
    private router: Router

  ) {
      this.form = this.fb.group({
        cedulaCliente: [''],
        contrasena: ['']
      })
    }


  ngOnInit(): void {
  }

  onSubmit(){
    this.login = new clientLogin(this.form.get('cedulaCliente')!.value,this.form.get('contrasena')!.value)

    this.services.loginBankApp(this.login).subscribe(
      (res:any) =>{
        console.log(res.id);
        if  (res.length > 0)
        {
          this._snackBar.open("Login exitoso", "Close", {
            duration: 2000,
          });
          this.router.navigate(['/dashboard/'+res[0].id]);
        }
        else
        {
          this._snackBar.open("Credenciales invalidas", "Close", {
            duration: 2000,
          });
        }      
      }
    )
  }

}
