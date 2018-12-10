import { Component, OnInit } from '@angular/core';
import { ChangeHeaderBgService } from './../../_services/_change-header-bg/change-header-bg.service';
import { ToggleSidebarService } from './../../_services/_toggle-sidebar/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerBg: string;
  public sidebarVisible: boolean;
  constructor(
      private _changeHeaderBgService: ChangeHeaderBgService,
      private _toggleSidebarService: ToggleSidebarService
    ) {
    this._changeHeaderBgService.headerBg.subscribe((value) => this.headerBg = value);
    this._toggleSidebarService.sidebarVisibilityChange.subscribe((value) => this.sidebarVisible = value);
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this._toggleSidebarService.toggleSidebarVisibilty();
    this.sidebarVisible = this._toggleSidebarService.isSidebarVisible;
    console.log(this.sidebarVisible);
  }
}
