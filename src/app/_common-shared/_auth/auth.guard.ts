import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubmitFormService } from '../_services/submit-form.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isLoggedin: boolean = false;
  public redirectURL: string;
  constructor(private router: Router,
    private _submitFormService: SubmitFormService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.redirectURL = state.url;
    console.log(this.redirectURL);
    return this.checkLogin(this.redirectURL);
  }

  checkLogin(url: string): boolean {
    if (localStorage.getItem('username') && localStorage.getItem('email') ) {
      this.isLoggedin = true;
      this._submitFormService._loginStat = true;
      return true;
    } else {
      this._submitFormService._loginStat = false;
      this.isLoggedin = true;
      if (this.redirectURL.indexOf('admin') > 0) {
        this.router.navigate(['admin/login']);
      } else {
        this.router.navigate(['user/login']);
      }
      return true;
    }
  }
}
