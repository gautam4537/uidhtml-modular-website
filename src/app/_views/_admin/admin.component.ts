import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public sidebarStat: boolean = true;
  constructor() { }

  ngOnInit() {

  }

  toggleSidebar(): void {
    this.sidebarStat = !this.sidebarStat;
  }

}
