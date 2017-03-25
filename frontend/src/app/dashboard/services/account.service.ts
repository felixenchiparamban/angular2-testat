import { Injectable } from '@angular/core';
import {AccountResourceService} from "../resources/account-resource-service";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";

@Injectable()
export class AccountService {

  constructor(private accountResource: AccountResourceService) { }

  public getAccount(id: number): Observable<Account>{
    return this.accountResource.getAccount(id);
  }

  public getLastTransactions(count: number): Observable<any>{
    return this.accountResource.getTransactions(count);
  }
}
