import { Component, OnInit } from '@angular/core';
import {
  SecurityTokenStore,
  SecurityToken
} from "../../../auth/services/credential-management/security-token-store";
import {AuthService} from "../../../auth/services/auth.service";
import {Account} from "../../../auth/models/account";

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {
  private account: Account;
  private fullname : string;
  constructor(private authService: AuthService) {
    this.account = authService.authenticatedUser;
    this.fullname = this.account.fullname;
  }

  ngOnInit() {
  }

}
