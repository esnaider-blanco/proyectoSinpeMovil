import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { bankAccount } from '../models/bankAccount.model';
import { client } from '../models/client.model';
import { clientLogin } from '../models/clientLogin.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private path = environment.apiUrl;
  

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<any[]>(this.path + "getClients", { headers: header });
  }
  
  createNewClient(client : client): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.path + 'addClient', JSON.stringify(client), { headers: header })
  }

  createNewBankAccount(bankAccount : bankAccount): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.path + 'addBankAccountByClient', JSON.stringify(bankAccount), { headers: header })
  }

  checkIfClientExist(clientId : number){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.path + 'checkClient/{clientId}', clientId, { headers: header })
  }

  getBankAccountTypes(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path + "getBankAccountTypes", { headers: header })
  }

  getBankAccountStatus(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path + "getBankAccountStatus", { headers: header })
  }

  loginBankApp(clientLogin : clientLogin):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.path + 'login', clientLogin, { headers: header })    
  }

  getBankAccountByClient(clientId : number):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<any[]>(this.path + 'getBankAccountByClient/' +clientId, { headers: header })
  }

  getBankEntities():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<any[]>(this.path + 'getBankEntities/', { headers: header })
  }

  getBankCurrencyTypes():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<any[]>(this.path + 'getBankCurrencyTypes/', { headers: header })
  }

  checkClientPhoneNumber(phoneNumber : string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path + 'checkClientPhoneNumber/'.concat(phoneNumber), { headers: header })
  }

  getMainBankAccountByClient(clientId : string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path + 'getMainBankAccountByClient/'.concat(clientId), { headers: header })
  }

  updateOriginAmount(idAccount:number,amount:number):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.path + 'updateOriginAmount/'.concat(idAccount.toString(),'/',amount.toString()), { headers: header })
  }

  updateDestinyAmount(idAccount:number,amount:number):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.path + 'updateDestinyAmount/'.concat(idAccount.toString(),'/',amount.toString()), { headers: header })
  }

  checkMainBankAccountByClient(clientId : string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.path + 'checkMainBankAccountByClient/'.concat(clientId), { headers: header })
  }
  
}
