import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-sinpe-form',
  templateUrl: './sinpe-form.component.html',
  styleUrls: ['./sinpe-form.component.css']
})

export class SinpeFormComponent implements OnInit {
  
  public idClienteDestino:any;
  public nombreClienteDestino:any;
  public cuentaDestinoInfo:any;

  public msgMonto:any;
  public cuentaOrigenInfo:any;

  public clientIcon:any;
  public amountIcon:any;
  public clientColorIcon:any;
  public amountColorIcon:any;

  public sinpeAmountField:any;

  constructor(public dialogRef: MatDialogRef<SinpeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,  private services: ServicesService, private http: HttpClient,@Inject(DOCUMENT) document: Document) 
    {
      this.cuentaOrigenInfo = data.accountInfo;
    }

    sinpeForm = new FormGroup({      
      numeroDestino: new FormControl('',[Validators.required]),
      monto: new FormControl('',[Validators.required]),
      descripcion: new FormControl('')
    });



  ngOnInit(): void {
    this.nombreClienteDestino = "Ingrese 8 digitos";
  }

  onClose(){
    this.dialogRef.close(0);
  }

  onSubmit(){
    //hacer el sinpe. actualizar los montos
    if (this.sinpeForm.value.numeroDestino! != '' && this.sinpeForm.value.monto! != '')
    {
      if (this.cuentaOrigenInfo[0].id != '')
      {
        console.log(this.cuentaDestinoInfo);
        if (this.cuentaDestinoInfo != null && this.cuentaDestinoInfo.length > 0 && this.cuentaDestinoInfo[0].id != '')
        {
          if (this.checkIfAmountIsValid())
          {
            this.services.updateOriginAmount(parseInt(this.cuentaOrigenInfo[0].id),parseFloat(this.sinpeForm.value.monto!))
            .subscribe(
              (res:any) =>{
                console.log(res) ;
    
                this.services.updateDestinyAmount(parseInt(this.cuentaDestinoInfo[0].id),parseFloat(this.sinpeForm.value.monto!))
                .subscribe(
                  (res:any) =>{
                    console.log(res) ;
                    
                    this.dialogRef.close(0);
                    this._snackBar.open("Transferencia exitosa.", "Close", {
                      duration: 2000,
                    });
                    window.location.reload();
                  }
                );
              }
            );
          }
          else {
            this._snackBar.open("Valores invalidos.", "Close", {
              duration: 2000,
            }); 
          }           
        }  
        else {
          this._snackBar.open("Valores invalidos.", "Close", {
            duration: 2000,
          });  
        }     
      }
      else {
        this._snackBar.open("Error con la cuenta origen.", "Close", {
          duration: 2000,
        });
      }
    }
    else {
      this._snackBar.open("Valores requeridos.", "Close", {
        duration: 2000,
      });
    }
  }

  checkPhoneNumber(){
    if (this.sinpeForm.value.numeroDestino! == '')
    {
      this.nombreClienteDestino = "Ingrese 8 digitos";
      this.clientIcon = '';
    }
    else
    {
      this.services.checkClientPhoneNumber(this.sinpeForm.value.numeroDestino!)
      .subscribe(
        (res:any) =>{ 
          if  (res[0].idCliente == 0){
            this.clientIcon = 'error';
            this.clientColorIcon = 'red';
          }
          else {
            this.clientIcon = 'verified';
            this.clientColorIcon = 'green';
            this.idClienteDestino = res[0].idCliente;

            //Get main bank account by client.
            this.services.getMainBankAccountByClient(this.idClienteDestino)
            .subscribe(
              (res:any) =>{
                this.cuentaDestinoInfo = res;
                console.log(this.cuentaDestinoInfo);
              }
            );
            
          }
          this.nombreClienteDestino = res[0].nombre;  
        }
      );
    }
  }

  checkIfAmountIsValid(){
    if (parseInt(this.sinpeForm.value.monto!) <= 0)
    {
      this.msgMonto = "El monto tiene que ser mayor a 0";
      this.amountIcon = 'error';
      this.amountColorIcon = 'red';
      return false;
    }
    else {
      if (parseInt(this.sinpeForm.value.monto!) > this.cuentaOrigenInfo[0].saldo)
      {
        this.msgMonto = "Fondos insuficientes";
        this.amountIcon = 'error';
        this.amountColorIcon = 'red';
        return false;
      }
      else
      {
        this.msgMonto = "";
        this.amountIcon = '';
        this.amountColorIcon = '';
        return true;
      }
    }
  }

}
