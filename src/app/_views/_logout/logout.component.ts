import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../_common-shared/_auth/auth.guard';
import { SubmitFormService } from '../../_common-shared/_services/submit-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authGuard: AuthGuard, private _submitFormService: SubmitFormService, private router: Router) { }

  ngOnInit() {
    this.authGuard.isLoggedin = false;
    this._submitFormService._logout();
    setTimeout(() => {
      this.router.navigate(['/admin/login']);
    }, 1000);
  }

}
