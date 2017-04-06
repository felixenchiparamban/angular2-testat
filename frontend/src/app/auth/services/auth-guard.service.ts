import {Injectable} from '@angular/core';
import {
  Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanLoad, Route
} from '@angular/router';
import {AuthService} from './auth.service';
import {NavigationService} from "../../core/services/navigation.service";

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router, private navigationService: NavigationService) {

  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      console.log('valid');
      return true;
    }
    console.log('invalid');
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.navigationService.goToHome();
    return false;
  }
}
