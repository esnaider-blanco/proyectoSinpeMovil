import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ServicesService = class ServicesService {
    constructor(http) {
        this.http = http;
        this.path = environment.apiUrl;
    }
    getClients() {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + "getClients", { headers: header });
    }
    createNewClient(client) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.post(this.path + 'addClient', JSON.stringify(client), { headers: header });
    }
    createNewBankAccount(bankAccount) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.post(this.path + 'addBankAccountByClient', JSON.stringify(bankAccount), { headers: header });
    }
    checkIfClientExist(clientId) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.post(this.path + 'checkClient/{clientId}', clientId, { headers: header });
    }
    getBankAccountTypes() {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + "getBankAccountTypes", { headers: header });
    }
    getBankAccountStatus() {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + "getBankAccountStatus", { headers: header });
    }
    loginBankApp(clientLogin) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.post(this.path + 'login', clientLogin, { headers: header });
    }
    getBankAccountByClient(clientId) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'getBankAccountByClient/' + clientId, { headers: header });
    }
    getBankEntities() {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'getBankEntities/', { headers: header });
    }
    getBankCurrencyTypes() {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'getBankCurrencyTypes/', { headers: header });
    }
    checkClientPhoneNumber(phoneNumber) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'checkClientPhoneNumber/'.concat(phoneNumber), { headers: header });
    }
    getMainBankAccountByClient(clientId) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'getMainBankAccountByClient/'.concat(clientId), { headers: header });
    }
    updateOriginAmount(idAccount, amount) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.put(this.path + 'updateOriginAmount/'.concat(idAccount.toString(), '/', amount.toString()), { headers: header });
    }
    updateDestinyAmount(idAccount, amount) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.put(this.path + 'updateDestinyAmount/'.concat(idAccount.toString(), '/', amount.toString()), { headers: header });
    }
    checkMainBankAccountByClient(clientId) {
        const header = new HttpHeaders().set('Content-type', 'application/json');
        return this.http.get(this.path + 'checkMainBankAccountByClient/'.concat(clientId), { headers: header });
    }
};
ServicesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServicesService);
export { ServicesService };
//# sourceMappingURL=services.service.js.map