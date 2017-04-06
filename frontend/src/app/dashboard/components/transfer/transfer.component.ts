import {Component, OnInit} from '@angular/core';
import {Account} from "../../../auth/models/account";
import {AuthService} from "../../../auth/services/auth.service";
import {ExtendedAccount} from "../../models/extended-account";
import {AccountService} from "../../services/account.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  private myAccount: ExtendedAccount;
  public targetAccount: ExtendedAccount;

  public toAccount: string;
  public amount: number;

  public paymentDone = false;
  public paymentResult:string;


  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.updateAccount();
  }

  private updateAccount(){
    this.accountService.getAccount()
      .subscribe(
        (extendedAccount: ExtendedAccount) => {
          this.myAccount = extendedAccount;
        }
      );
  }

  public pay(payForm: NgForm): boolean {
    if (payForm.form.valid && this.targetAccount) {
      this.accountService.addTransaction(this.toAccount, this.amount)
        .subscribe(
          (result: boolean) => {
            this.updateAccount();
            this.paymentDone = true;
          },
          (error: any) => this.paymentResult = error.message
        );
    }
    return false;
  }

  public onTargetAccountChange() {
    if (this.toAccount) {
      this.accountService.getAccount(parseInt(this.toAccount, 10))
        .subscribe(
          (account: ExtendedAccount) => this.targetAccount = account
        );
    }
  }

  public reset(){
    this.paymentDone = false;
    this.toAccount = "";
    this.amount = 0;
    this.targetAccount = null;
  }

}
