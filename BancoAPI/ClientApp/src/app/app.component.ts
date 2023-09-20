import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'ClientApp';
  
  constructor() { }
  
  ngOnInit(): void{

  }
}


