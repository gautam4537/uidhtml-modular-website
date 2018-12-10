import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToggleSidebarService } from './_shared/_services/_toggle-sidebar/toggle-sidebar.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontendComponent implements OnInit {
  public sidebarVisible: boolean;
  constructor(private _toggleSidebarService: ToggleSidebarService) {
     this._toggleSidebarService.sidebarVisibilityChange.subscribe((value) => this.sidebarVisible = value);
  }

  ngOnInit() {
    this.sidebarVisible = this._toggleSidebarService.isSidebarVisible;
  }

}
