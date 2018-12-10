import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from '../../_services/_toggle-sidebar/toggle-sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarVisible: boolean;
  constructor(private _router: Router, private _toggleSidebarService: ToggleSidebarService) {
    this._toggleSidebarService.sidebarVisibilityChange.subscribe((value) => this.sidebarVisible = value);
  }

  ngOnInit() {
    this.sidebarVisible = this._toggleSidebarService.isSidebarVisible;
  }
  navigateTo() {
    this._router.navigate(['']);
  }
}
