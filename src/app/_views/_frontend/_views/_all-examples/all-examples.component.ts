import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChangeHeaderBgService } from '../../_shared/_services/_change-header-bg/change-header-bg.service';

@Component({
  selector: 'app-all-examples',
  templateUrl: './all-examples.component.html',
  styleUrls: ['./all-examples.component.scss']
})
export class AllExamplesComponent implements OnInit, AfterViewInit {

  constructor(private _title: Title, private _changeHeaderBgService: ChangeHeaderBgService) { }

  ngOnInit() {
    this._title.setTitle(`UIDHTML: List of all examples`);
  }

  ngAfterViewInit() {
    this._changeHeaderBgService.headerBg.next('#0b090d');
  }
}
