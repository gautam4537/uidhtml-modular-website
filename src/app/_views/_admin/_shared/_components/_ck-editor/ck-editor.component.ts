import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {
  public ckeConfig: any;
  @Output() public bodyContent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: false
    };
  }
  onChange($event: any): void {
    console.log($event);
    this.bodyContent.emit($event);
    // this.log += new Date() + "<br />";
  }
}
