import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<false>();
  public sideBarStat: boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  toggle() {
    this.sideBarStat = !this.sideBarStat;
    this.toggleSidebar.emit();
  }
}
