import {Component, OnInit, transition} from '@angular/core';
import {Transaction} from "../../models/transaction";
import {Subscription} from "rxjs";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  readonly startYear = 2015;
  readonly endYear = 2017;
  private years:number[] = [];
  private months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  private selectedYear = 2015;
  private selectedMonth = "January";

  private allTransactions: Transaction[] = [];
  private subscription: Subscription;

  constructor(private accountService: AccountService) {
    this.initYears();
  }

  private initYears(){
    for(let i = this.startYear; i <= this.endYear; i++){
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.subscription = this.accountService.allTransactionChange.subscribe(
      (transition: Transaction[]) => {
        this.allTransactions = transition;
      }
    );
    this.getAllTransaction();
  }

  getAllTransaction(){

  }

  onChange(e:UIEvent){
    e.preventDefault();

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
