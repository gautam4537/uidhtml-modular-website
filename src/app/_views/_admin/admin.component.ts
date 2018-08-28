import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public loginUrl: string;
  public sidebarStat: boolean = true;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginUrl = this._router.url;
    console.log(this.loginUrl);
  }

  toggleSidebar(): void {
    this.sidebarStat = !this.sidebarStat;
  }

}
