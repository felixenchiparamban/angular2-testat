import {Injectable, EventEmitter} from '@angular/core';
import {AccountResourceService} from "../resources/account-resource-service";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";
import {Transaction} from "../models/transaction";
import {ExtendedAccount} from "../models/extended-account";

@Injectable()
export class AccountService {

  public lastTransactionsChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  private lastTransactions:Transaction[] = null;

  constructor(private accountResource: AccountResourceService) {
  }

  public getAccount(id?: number): Observable<ExtendedAccount> {
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
}
