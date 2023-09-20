import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { client } from '../models/client.model';
let ClientFormComponent = class ClientFormComponent {
    constructor(dialogRef, data, _snackBar, services, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.services = services;
        this.http = http;
        this.newClientForm = new FormGroup({
            id: new FormControl(''),
            cedulaCliente: new FormControl(''),
            nombre: new FormControl(''),
            primerApellido: new FormControl(''),
            segundoApellido: new FormControl(''),
            fechaNacimiento: new FormControl(''),
            contrasena: new FormControl(''),
            telefono: new FormControl(''),
            email: new FormControl(''),
            direccion: new FormControl('')
        });
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close(0);
    }
    async onSubmit() {
        this.newClient = new client(this.newClientForm.value.cedulaCliente, this.newClientForm.value.nombre, this.newClientForm.value.primerApellido, this.newClientForm.value.segundoApellido, this.newClientForm.value.fechaNacimiento, this.newClientForm.value.contrasena, this.newClientForm.value.telefono, this.newClientForm.value.email, this.newClientForm.value.direccion);
        this.services.createNewClient(this.newClient)
            .subscribe((res) => {
            this.dialogRef.close(0);
            this._snackBar.open("Nuevo cliente creado exitosamente", "Close", {
                duration: 2000,
            });
        });
    }
};
ClientFormComponent = __decorate([
    Component({
        selector: 'app-client-form',
        templateUrl: './client-form.component.html',
        styleUrls: ['./client-form.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ClientFormComponent);
export { ClientFormComponent };
//# sourceMappingURL=client-form.component.js.map