import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {
  public ckeConfig: any;
  public ckeditorContent: String = '<p>Some html</p>';
  constructor() { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: false
    };
  }
  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }
}
