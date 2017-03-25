import {Injectable} from '@angular/core';
import {ResourceBase} from "../../auth";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";

@Injectable()
export class AccountResourceService extends ResourceBase {

  constructor(http: Http) {
    super(http);
  }

  public getAccount(id: number): Observable<Account> {
    return this.get(`/accounts/${id}`)
      .map((response: Response) => {
        let result = response.json();
        if (result) {
          return Account.fromDto(result);
        }
        return null;
      }).catch((error: any) => {
        return Observable.of<Account>(null);
      });
  }

  public getTransactions(count: number): Observable<any>{
    return this.get(`/accounts/transactions?count=${count}`)
      .map((response: Response) => {
        console.log(response);
        return null;
      }).catch((error: any) => {
        return Observable.of<Account>(null);
      });
  }
  //accounts/transactions?fromDate=2016-05-11T02:00:00.000Z&toDate=2016-12-11T02:00:00.000Z&count=4

}
