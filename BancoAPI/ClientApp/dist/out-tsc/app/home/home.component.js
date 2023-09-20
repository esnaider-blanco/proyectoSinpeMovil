import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { BankAccountFormComponent } from '../bank-account-form/bank-account-form.component';
import { ClientFormComponent } from '../client-form/client-form.component';
let HomeComponent = class HomeComponent {
    constructor(dialog, _snackBar, services) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.services = services;
    }
    ngOnInit() {
    }
    addClient() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '450px';
        let dialogRef = this.dialog.open(ClientFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(res => {
            if (res != 0) {
                console.log('The dialog was closed but client was created');
                this._snackBar.open("Client was created Successfully", "Close", {
                    duration: 2000,
                });
            }
            else {
                console.log('The dialog was closed');
            }
        });
    }
    addBankAccount() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '500px';
        let dialogRef = this.dialog.open(BankAccountFormComponent, dialogConfig);
        dialogRef.afterClosed()
            .subscribe((res) => {
            if (res != 0) {
                console.log('The dialog was closed but client was created');
                this._snackBar.open("Client was created Successfully", "Close", {
                    duration: 2000,
                });
            }
            else {
                console.log('The dialog was closed');
            }
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map