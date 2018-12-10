import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {
  public ckeConfig: any;
  @Input() ckeditorContent: string = '';
  @Output() public bodyContent = new EventEmitter<any>();
  constructor() {
   }

  ngOnInit() {
    this.ckeConfig = {
      uiColor: '#F0F3F4'
    };
  }
  onChange($event: any): void {
    // console.log(this.ckeditorContent);
    this.bodyContent.emit($event);
  }
  onEditorChange($event: any): void {
    // console.log($event);
  }
  onReady($event: any): void {
    // console.log($event);
  }
  onFocus($event: any): void {
    // console.log($event);
  }
  onBlur($event: any): void {
    // console.log($event);
  }
  onContentDom($event: any): void {
    // console.log($event);
  }
  onFileUploadRequest($event: any): void {
    // console.log($event);
  }
  onFileUploadResponse($event: any): void {
    // console.log($event);
  }
  onPaste($event: any): void {
    // console.log($event);
  }
  onDrop($event: any): void {
    // console.log($event);
  }
}
