import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bankAccount } from '../models/bankAccount.model';
let BankAccountFormComponent = class BankAccountFormComponent {
    constructor(dialogRef, data, _snackBar, services, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.services = services;
        this.http = http;
        this.chkEsCuentaPrincipal = 0;
        this.newBankAccountForm = new FormGroup({
            idCliente: new FormControl(''),
            idTipoCuenta: new FormControl(''),
            idEntidad: new FormControl(''),
            idTipoMoneda: new FormControl(''),
            nombreCuenta: new FormControl(''),
            numeroCuenta: new FormControl(''),
            saldo: new FormControl(''),
            idEstadoCuenta: new FormControl('')
        });
    }
    ngOnInit() {
        this.services.getBankAccountTypes()
            .subscribe((res) => {
            this.accountTypeList = res;
        });
        this.services.getClients()
            .subscribe((res) => {
            this.clientList = res;
        });
        this.services.getBankAccountStatus()
            .subscribe((res) => {
            this.accountStatusList = res;
        });
        this.services.getBankEntities()
            .subscribe((res) => {
            this.bankEntitiesList = res;
        });
        this.services.getBankAccountStatus()
            .subscribe((res) => {
            this.accountStatusList = res;
        });
        this.services.getBankCurrencyTypes()
            .subscribe((res) => {
            this.bankCurrencyTypeList = res;
        });
    }
    onClose() {
        this.dialogRef.close(0);
    }
    async onSubmit() {
        if (this.chkEsCuentaPrincipal == 1) {
            this.services.checkMainBankAccountByClient(this.newBankAccountForm.value.idCliente)
                .subscribe((res) => {
                console.log(res[0].totalMainAccount);
                if (parseInt(res[0].totalMainAccount) > 0) {
                    this._snackBar.open("Ya tiene una cuenta principal configurada.", "Close", {
                        duration: 2000,
                    });
                }
                else {
                    this.newBankAccount = new bankAccount(parseInt(this.newBankAccountForm.value.idCliente), parseInt(this.newBankAccountForm.value.idTipoCuenta), parseInt(this.newBankAccountForm.value.idEntidad), parseInt(this.newBankAccountForm.value.idTipoMoneda), this.newBankAccountForm.value.nombreCuenta, this.newBankAccountForm.value.numeroCuenta, parseFloat(this.newBankAccountForm.value.saldo), parseInt(this.newBankAccountForm.value.idEstadoCuenta), this.chkEsCuentaPrincipal);
                    this.services.createNewBankAccount(this.newBankAccount).subscribe((res) => {
                        this.dialogRef.close(0);
                        this._snackBar.open("Cuenta creada exitosamente.", "Close", {
                            duration: 2000,
                        });
                    });
                }
            });
        }
        else {
            this.newBankAccount = new bankAccount(parseInt(this.newBankAccountForm.value.idCliente), parseInt(this.newBankAccountForm.value.idTipoCuenta), parseInt(this.newBankAccountForm.value.idEntidad), parseInt(this.newBankAccountForm.value.idTipoMoneda), this.newBankAccountForm.value.nombreCuenta, this.newBankAccountForm.value.numeroCuenta, parseFloat(this.newBankAccountForm.value.saldo), parseInt(this.newBankAccountForm.value.idEstadoCuenta), this.chkEsCuentaPrincipal);
            this.services.createNewBankAccount(this.newBankAccount).subscribe((res) => {
                this.dialogRef.close(0);
                this._snackBar.open("Cuenta creada exitosamente.", "Close", {
                    duration: 2000,
                });
            });
        }
    }
    onChkChange(event) {
        if (event.checked) {
            this.chkEsCuentaPrincipal = 1;
        }
        else {
            this.chkEsCuentaPrincipal = 0;
        }
    }
};
BankAccountFormComponent = __decorate([
    Component({
        selector: 'app-bank-account-form',
        templateUrl: './bank-account-form.component.html',
        styleUrls: ['./bank-account-form.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], BankAccountFormComponent);
export { BankAccountFormComponent };
//# sourceMappingURL=bank-account-form.component.js.map