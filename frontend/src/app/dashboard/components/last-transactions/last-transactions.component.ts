import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/";
import {Account} from "../../../auth/models/account";
import {Transaction} from "../../models/transaction";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.css']
})
export class LastTransactionsComponent implements OnInit {
  private lastTransactions: Transaction[] = [];
  private subscription: Subscription;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.subscription = this.accountService.lastTransactionsChange.subscribe(
      (transactions: Transaction[]) => {
        this.lastTransactions = transactions;
      });
    this.getLastTransactions();
  }

  getLastTransactions() {
    console.log('getting last transactions');
    this.accountService.getLastTransactions(3);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
