import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { clientLogin } from '../models/clientLogin.model';
let LoginFormComponent = class LoginFormComponent {
    constructor(_snackBar, services, http, fb, router) {
        this._snackBar = _snackBar;
        this.services = services;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.form = this.fb.group({
            cedulaCliente: [''],
            contrasena: ['']
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.login = new clientLogin(this.form.get('cedulaCliente').value, this.form.get('contrasena').value);
        this.services.loginBankApp(this.login).subscribe((res) => {
            console.log(res.id);
            if (res.length > 0) {
                this._snackBar.open("Login exitoso", "Close", {
                    duration: 2000,
                });
                this.router.navigate(['/dashboard/' + res[0].id]);
            }
            else {
                this._snackBar.open("Credenciales invalidas", "Close", {
                    duration: 2000,
                });
            }
        });
    }
};
LoginFormComponent = __decorate([
    Component({
        selector: 'app-login-form',
        templateUrl: './login-form.component.html',
        styleUrls: ['./login-form.component.css']
    })
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=login-form.component.js.map