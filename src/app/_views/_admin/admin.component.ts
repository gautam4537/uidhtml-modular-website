import { Component, OnInit } from '@angular/core'; 
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public loginUrl: any;
  route: string;
  public sidebarStat: boolean = true;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _location: Location) {
    this._router.events.subscribe((val) => {
        this.loginUrl = this._location.path();
      // console.log(this.loginUrl);
    });
  }

  ngOnInit() {
    // console.log(this._router);
  }

  toggleSidebar(): void {
    this.sidebarStat = !this.sidebarStat;
  }

}
