import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public bodyContent: string = '';
  public imageErrorData: string = '!Yet, thumbnail has not been included.';
  public imageError: boolean = false;
  public zipError: boolean = false;
  public createdDate: string = '';

  public form: FormGroup;

  @ViewChild('imageFileInput') imageFileInput: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;

  constructor(private _fb: FormBuilder) {
    const d: Date = new Date();
    this.form = this._fb.group({
      title : ['hello', Validators.required],
      description: ['', Validators.required],
      langUsed: ['', Validators.required],
      postType: ['', Validators.required],
      youtubeVideo: ['', Validators.required],
      metaTitle: ['', Validators.required],
      metaDesc: ['', Validators.required],
      keywords: ['', Validators.required],
      image: ['', Validators.required],
      zip: ['', Validators.required],
      body: ['', Validators.required],
      createdDate: ['', Validators.required],
      status: ['0', Validators.required]
    });
  }

  ngOnInit() {
    this.form.controls['createdDate'].setValue(this.fetchDate());
  }

  // Set zero to date
  fetchDate(): string {
    const date = new Date();
    let days: string;
    let months: string;
    let years: string;
    if (date.getDate() < 10) {
      days = '0' + date.getDate().toString();
    } else {
      days = date.getDate().toString();
    }
    if (date.getMonth() < 10) {
      months = '0' + (date.getMonth() + 1) .toString();
    } else {
      months = (date.getMonth() + 1).toString();
    }
    if (date.getFullYear() < 10) {
      years = '0' + date.getFullYear().toString();
    } else {
      years = date.getFullYear().toString();
    }
    return days + '/' + months + '/' + years;
  }
  // Traget file type input and apply click event to get image or zip file
  browseFile(event): void {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.nextElementSibling.click();
  }

  // Set value and error to image file field and zip file field
  setTypeFileValToFormControl($event) {
    this.imageError = this.checkImageNzipError('image');
    const self = this;
    const file = $event.currentTarget.files[0];
    if ($event.currentTarget.id === 'imageFileField') {
      if (file.size >= 102400) {
        this.imageErrorData = ' File size should be less then 100KB ';
        this.form.controls['image'].setValue('');
        this.imageError = this.checkImageNzipError('image');
      } else {
        this.imageErrorData = '';
        if (file.length !== 0) {
          const fileReader = new FileReader();
          fileReader.onload = function(e) {
            self.previewImage.nativeElement.src = this.result;
            self.previewImage.nativeElement.title = file.name;
          };
          fileReader.readAsDataURL(file);
        }
      }
    }
    if ($event.currentTarget.id === 'zipFileField') {
      this.zipError = this.checkImageNzipError('zip');
    }
  }
  // Get post body content from CkEditor
  getBodyContent($event) {
    this.form.controls['body'].setValue($event);
  }

  // Check for image and zip error
  checkImageNzipError(controlName: string): boolean {
    let error = false;
    if ((this.form.controls[controlName].pristine && this.form.controls[controlName].status === 'INVALID')
      || !this.form.controls[controlName].value ) {
      error = true;
    } else {
      error = false;
    }
    return error;
  }
  // Submit form
  submit() {
    this.imageError = this.checkImageNzipError('image');
    this.zipError = this.checkImageNzipError('zip');

    const formData = new FormData();
    console.log(this.form.value);
  }
}
