import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { SinpeFormComponent } from '../sinpe-form/sinpe-form.component';
let DashboardComponent = class DashboardComponent {
    constructor(_snackBar, services, http, fb, router, activatedRoute, dialog) {
        this._snackBar = _snackBar;
        this.services = services;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.displayedColumns = ['entidad', 'tipoCuenta', 'tipoMoneda', 'nombreCuenta', 'numeroCuenta', 'saldo', 'estadoCuenta', 'esCuentaPrincipal'];
    }
    ngOnInit() {
        this.RouteParams = this.activatedRoute.paramMap
            .subscribe((param) => {
            this.idCliente = param.get('cedulaCliente');
            //Get all bank accounts by client.
            this.services.getBankAccountByClient(this.idCliente)
                .subscribe((res) => {
                this.bankAccounts = res;
                //Get main bank account by client.
                this.services.getMainBankAccountByClient(this.idCliente)
                    .subscribe((res) => {
                    this.cuentaOrigen = res;
                });
            });
        });
    }
    openSinpeForm() {
        console.log(this.bankAccounts);
        if (this.bankAccounts.length > 0) {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.width = '300px';
            dialogConfig.data = {
                accountInfo: this.cuentaOrigen
            };
            let dialogRef = this.dialog.open(SinpeFormComponent, dialogConfig);
            dialogRef.afterClosed().subscribe(res => {
                if (res != 0) {
                    console.log('The dialog was closed but client was created');
                }
                else {
                    console.log('The dialog was closed');
                }
            });
        }
        else {
            this._snackBar.open("No disponible.", "Close", {
                duration: 2000,
            });
        }
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map