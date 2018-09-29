import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubmitFormService} from '../../_common-shared/_services/submit-form.service';
import { AuthGuard } from '../../_common-shared/_auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logger: string = 'Admin';
  public form: FormGroup;
  private msg: string = '';

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _submitFormService: SubmitFormService,
    private _authGuard: AuthGuard
  ) {
    if ( this._router.url .indexOf('admin') > 0) {
      this.logger = 'Admin';
    } else {
      this.logger = 'User';
    }

    this.form = this.fb.group({
      email: ['gautam@uidhtml.com', Validators.required],
      password: ['Kingbadshah@12', Validators.required]
    });
  }

  ngOnInit() {
    if (localStorage) {
      if (localStorage.getItem('username') && localStorage.getItem('email')) {
        this.logger === 'Admin' ? this._router.navigate(['/admin/dashboard']) : this._router.navigate(['/user/dashboard']);
        this._authGuard.isLoggedin = true;
      } else {
        this._authGuard.isLoggedin = false;
      }
    }
  }

  // Submit login form
  submit() {
    const url: string = this.logger === 'Admin' ? '/src/app/_apis/admin/admin-login.php' : '/src/app/_apis/frontend/user-login.php';
    // const url: string = this.logger === 'Admin' ? '/admin/admin-login.php' : '/frontend/user-login.php';

    const formData = new FormData();
    Object.keys(this.form.value).forEach((key) => formData.append(key, this.form.value[key]));
    this.checkLogin(url, formData);
  }
  checkLogin(url: string, formData: FormData): void {
    console.log(formData);
    this._submitFormService._postData(url, formData)
      .subscribe(
        (resp: any) => {
          console.log('Resp', resp);
          if (resp[0].result === 0) {
            this.msg = '!Sorry, Record does not exist in our database.';
            console.log(this.msg);
            return false;
          }
          if (resp[0].result === 2) {
            this.msg = '!Credentials are incorrect.';
            console.log(this.msg);
            return false;
          }
          if (resp[0].result === 1) {
            this.msg = 'You have successfully logged in.';
            console.log(this.msg);
            this._submitFormService._loginStat = resp[0].status;
            this._authGuard.isLoggedin = resp[0].status;
            if (resp[0].loggedData) {
              localStorage.setItem('username', resp[0].loggedData.username);
              localStorage.setItem('email', resp[0].loggedData.email);
            }
            if (resp[0].status) {
              this._router.navigate(['admin/dashboard']);
            } else {
              this._router.navigate(['admin/login']);
            }
            return false;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }
}
