import { Component, OnInit } from '@angular/core';
import {Account} from "../../../auth/models/account";
import {AuthService} from "../../../auth/services/auth.service";
import {ExtendedAccount} from "../../models/extended-account";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  private myAccount: ExtendedAccount;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getAccount()
      .subscribe(
        (extendedAccount: ExtendedAccount) => {
          this.myAccount = extendedAccount;
        }
      );
  }

}
