import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public sidebarStat: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    console.log(this.sidebarStat);
    this.sidebarStat = !this.sidebarStat;
  }

}
