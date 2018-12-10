import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  public isSidebarVisible: boolean = true;
  public sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  constructor(private _router: Router) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.replace('/', '') === '') {
          this.isSidebarVisible = true;
          this.toggleSidebarVisibilty();
        }
      }
    });
    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value;
    });
  }
  toggleSidebarVisibilty() {
    this.sidebarVisibilityChange.next(!this.isSidebarVisible);
  }
}
