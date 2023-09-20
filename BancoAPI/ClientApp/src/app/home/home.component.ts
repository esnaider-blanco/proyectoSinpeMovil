import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BankAccountFormComponent } from '../bank-account-form/bank-account-form.component';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private services: ServicesService) { }
  ngOnInit(): void {

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
    .subscribe(
      (res:any) =>
       {
          if (res != 0) {
            console.log('The dialog was closed but client was created');

            this._snackBar.open("Client was created Successfully", "Close", {
              duration: 2000,
            });
          }
          else {
            console.log('The dialog was closed');
          }
        }
      );

  }

}
