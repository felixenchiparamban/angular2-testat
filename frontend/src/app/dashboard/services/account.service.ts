import {Injectable, EventEmitter} from '@angular/core';
import {AccountResourceService} from "../resources/account-resource-service";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";
import {Transaction} from "../models/transaction";

@Injectable()
export class AccountService {

  public lastTransactionsChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  private lastTransactions:Transaction[] = null;

  public allTransactionChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  private allTransactions:Transaction[] = null;

  constructor(private accountResource: AccountResourceService) {
  }

  public getAccount(id: number): Observable<Account> {
    return this.accountResource.getAccount(id);
  }

  public getLastTransactions(count: number): void {
    this.accountResource.getTransactions(new Date('2015-01-01'), new Date(), count, 0)
      .subscribe(
        (transactions: Transaction[]) => {
          this.lastTransactions = transactions;
          this.lastTransactionsChange.emit(this.lastTransactions);
        });
  }

  public getAllTransactions():void {

  }

}
