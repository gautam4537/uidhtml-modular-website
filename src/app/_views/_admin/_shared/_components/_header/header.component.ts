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
    const header_h = this.elementRef.nativeElement.firstElementChild.offsetHeight;
    this.elementRef.nativeElement.style.height = header_h + 'px';
  }
  toggle() {
    this.sideBarStat = !this.sideBarStat;
    if (this.sideBarStat === true ) {
      this.elementRef.nativeElement.firstElementChild.style.paddingRight = '320px';
    } else {
      this.elementRef.nativeElement.firstElementChild.style.paddingRight = '0';
    }
    this.toggleSidebar.emit();
  }
}
