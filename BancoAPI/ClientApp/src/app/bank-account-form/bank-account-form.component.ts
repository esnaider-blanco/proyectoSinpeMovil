import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';
import { bankAccount } from '../models/bankAccount.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})

export class BankAccountFormComponent implements OnInit {

  newBankAccount: bankAccount | undefined;
  clientId: any;
  clientList: any;
  accountStatusList: any;
  accountTypeList: any;
  bankEntitiesList: any;
  bankCurrencyTypeList: any;
  chkEsCuentaPrincipal = 0;

  constructor(public dialogRef: MatDialogRef<BankAccountFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,  private services: ServicesService, private http: HttpClient) { }

    newBankAccountForm = new FormGroup({      
      idCliente: new FormControl(''),
      idTipoCuenta: new FormControl(''),
      idEntidad: new FormControl(''),
      idTipoMoneda: new FormControl(''),
      nombreCuenta: new FormControl(''),
      numeroCuenta: new FormControl(''),
      saldo: new FormControl(''),
      idEstadoCuenta: new FormControl('')
    });
    

  ngOnInit(): void {

    this.services.getBankAccountTypes()
    .subscribe(
      (res:any) =>{ 
        this.accountTypeList = res;
      }
    );

    this.services.getClients()
    .subscribe(
      (res:any) =>{
        this.clientList = res;
      }
    );

    this.services.getBankAccountStatus()
    .subscribe(
      (res:any) =>{
        this.accountStatusList = res;
      }
    );

    this.services.getBankEntities()
    .subscribe(
      (res:any) =>{
        this.bankEntitiesList = res;
      }
    );

    this.services.getBankAccountStatus()
    .subscribe(
      (res:any) =>{
        this.accountStatusList = res;
      }
    );

    this.services.getBankCurrencyTypes()
    .subscribe(
      (res:any) =>{
        this.bankCurrencyTypeList = res;
      }
    );
  }

  onClose(){
    this.dialogRef.close(0);
  }

  async onSubmit(){      
    if (this.chkEsCuentaPrincipal == 1)
    {
      this.services.checkMainBankAccountByClient(this.newBankAccountForm.value.idCliente!)
      .subscribe(
        (res:any) =>{
          console.log(res[0].totalMainAccount);
          if (parseInt(res[0].totalMainAccount) > 0){
            this._snackBar.open("Ya tiene una cuenta principal configurada.", "Close", {
              duration: 2000,
            });
          }
          else{
            this.newBankAccount = new bankAccount(parseInt(this.newBankAccountForm.value.idCliente!),parseInt(this.newBankAccountForm.value.idTipoCuenta!),parseInt(this.newBankAccountForm.value.idEntidad!),parseInt(this.newBankAccountForm.value.idTipoMoneda!),this.newBankAccountForm.value.nombreCuenta!,this.newBankAccountForm.value.numeroCuenta!, parseFloat(this.newBankAccountForm.value.saldo!),parseInt(this.newBankAccountForm.value.idEstadoCuenta!),this.chkEsCuentaPrincipal);    
            this.services.createNewBankAccount(this.newBankAccount).subscribe((res: any) => {
              this.dialogRef.close(0);
              this._snackBar.open("Cuenta creada exitosamente.", "Close", {
                duration: 2000,
              });
            })
          }
        }
      );
    }
    else{
      this.newBankAccount = new bankAccount(parseInt(this.newBankAccountForm.value.idCliente!),parseInt(this.newBankAccountForm.value.idTipoCuenta!),parseInt(this.newBankAccountForm.value.idEntidad!),parseInt(this.newBankAccountForm.value.idTipoMoneda!),this.newBankAccountForm.value.nombreCuenta!,this.newBankAccountForm.value.numeroCuenta!, parseFloat(this.newBankAccountForm.value.saldo!),parseInt(this.newBankAccountForm.value.idEstadoCuenta!),this.chkEsCuentaPrincipal);    
      this.services.createNewBankAccount(this.newBankAccount).subscribe((res: any) => {
        this.dialogRef.close(0);
        this._snackBar.open("Cuenta creada exitosamente.", "Close", {
          duration: 2000,
        });
      })
    }
      
    


    
          

  }

  onChkChange(event:any){
    if (event.checked)
    {
      this.chkEsCuentaPrincipal = 1;
    }
    else
    {
      this.chkEsCuentaPrincipal = 0;
    }
  }

}
