import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { client } from '../models/client.model';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientIdGenerated: any;
  newClient: client | undefined;
  

  constructor(public dialogRef: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,  private services: ServicesService, private http: HttpClient) { }

    newClientForm = new FormGroup({      
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

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(0);
  }

  async onSubmit(){
    this.newClient = new client(this.newClientForm.value.cedulaCliente!,this.newClientForm.value.nombre!,this.newClientForm.value.primerApellido!,this.newClientForm.value.segundoApellido!,this.newClientForm.value.fechaNacimiento!,this.newClientForm.value.contrasena!,this.newClientForm.value.telefono!,this.newClientForm.value.email!,this.newClientForm.value.direccion!);

    this.services.createNewClient(this.newClient)
    .subscribe(
      (res: any) => {      
        this.dialogRef.close(0);
        this._snackBar.open("Nuevo cliente creado exitosamente", "Close", {
          duration: 2000,
        });
      }
    )
  }
  
}
