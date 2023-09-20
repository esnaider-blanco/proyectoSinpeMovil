import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SinpeFormComponent } from '../sinpe-form/sinpe-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  RouteParams: any;
  bankAccounts: any;
  idCliente:any;
  cuentaOrigen:any;
  cuentaDestino:any;

  constructor(
    private _snackBar: MatSnackBar,
    private services: ServicesService,
    private http: HttpClient,
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.RouteParams = this.activatedRoute.paramMap
    .subscribe((param) => {
      this.idCliente = param.get('cedulaCliente');
      //Get all bank accounts by client.
      this.services.getBankAccountByClient(this.idCliente)
      .subscribe(
        (res:any) => {
          this.bankAccounts = res;
          //Get main bank account by client.
          this.services.getMainBankAccountByClient(this.idCliente)
          .subscribe(
            (res:any) =>{
              this.cuentaOrigen = res;
            }
          );
        }
      )
    })  

  }

  openSinpeForm(){
    console.log(this.bankAccounts);
    if (this.bankAccounts.length > 0)
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '300px';
      dialogConfig.data = {
        accountInfo: this.cuentaOrigen
      }
  
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
    else
    {
      this._snackBar.open("No disponible.", "Close", {
        duration: 2000,
      });
    }




  }

  displayedColumns: string[] = ['entidad', 'tipoCuenta', 'tipoMoneda', 'nombreCuenta', 'numeroCuenta', 'saldo', 'estadoCuenta','esCuentaPrincipal'];

}
