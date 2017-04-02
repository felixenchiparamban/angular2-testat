import {Component, OnInit} from '@angular/core';
import {Account} from "../../../auth/models/account";
import {AuthService} from "../../../auth/services/auth.service";
import {ExtendedAccount} from "../../models/extended-account";
import {AccountService} from "../../services/account.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  private myAccount: ExtendedAccount;
  private targetAccount: ExtendedAccount;

  public toAccount: string = "1000002";
  public amount: number = 10.0;

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

  public pay(payForm: NgForm): boolean {
    if (payForm.form.valid) {
      this.accountService.addTransaction(this.toAccount, this.amount);
    }
    return false;
  }

  public onTargetAccountChange(){
    if(this.toAccount){
      this.accountService.getAccount(parseInt(this.toAccount, 10))
        .subscribe(
          (account: ExtendedAccount) => this.targetAccount = account
        );
    }
  }

}
