import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/";
import {Account} from "../../../auth/models/account";

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.css']
})
export class LastTransactionsComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getLastTransactions(3)
      .subscribe();
  }

}
