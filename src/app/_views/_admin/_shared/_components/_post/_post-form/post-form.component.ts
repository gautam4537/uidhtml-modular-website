import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitFormService } from './../../../../../../_common-shared/_services/submit-form.service';
import { MatDialog } from '@angular/material';
import { MaterialDialogueComponent } from '../../../../../../_common-shared/_material-dialogue/material-dialogue.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public formData: FormData = new FormData();
  public bodyContent: string = '';
  public imageErrorData: string = '!Yet, thumbnail has not been included.';
  public imageError: boolean = false;
  public zipError: boolean = false;
  public createdDate: string = '';
  public total_record_in_table: number = 0;

  public form: FormGroup;

  @ViewChild('showImageName') showImageName: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;
  @ViewChild('showZipName') showZipName: ElementRef;

  constructor(private _fb: FormBuilder, private _submitFormService: SubmitFormService, public dialog: MatDialog) {
    const date = new Date();
    this.form = this._fb.group({
      title : ['', Validators.required],
      description: ['', Validators.required],
      langUsed: ['', Validators.required],
      postType: ['', Validators.required],
      image: ['', Validators.required],
      youtubeVideoId: '',
      createdDate: date,
      views: 0,
      downloads: 0,
      likes: 0,
      metaTitle: ['', Validators.required],
      metaDesc: ['', Validators.required],
      keywords: ['', Validators.required],
      body: ['', Validators.required],
      status: 0
    });
  }

  ngOnInit() {
    const tableName: string = 'posts';
    const url: string = '/src/app/_apis/admin/get_total_record_from_table.php?tableName=' + tableName;
    this._submitFormService._getData(url).subscribe((data) => {
      this.total_record_in_table = data[0].row_num + 1;
    });
  }

  // Traget file type input and apply click event to get image or zip file
  browseFile(event): void {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.nextElementSibling.click();
  }

  // Set value and error to image file field and zip file field
  setTypeFileValToFormControl($event) {
    const self = this;
    const file = $event.currentTarget.files[0];
    if ($event.currentTarget.id === 'imageFileField') {
      this.formData.append('imageFile', file);
      this.imageError = this.checkImageError('image');
      if (file.size >= 102400) {
        this.imageErrorData = ' File size should be less then 100KB ';
        this.form.controls['image'].setValue('');
        this.imageError = this.checkImageError('image');
      } else {
        this.imageErrorData = '';
        if (file.length !== 0) {
          const fileReader = new FileReader();
          fileReader.onload = function(e) {
            self.previewImage.nativeElement.src = this.result;
            self.previewImage.nativeElement.title = file.name;
            self.showImageName.nativeElement.value = file.name;
          };
          fileReader.readAsDataURL(file);
        }
      }
    }
    if ($event.currentTarget.id === 'zipFileField') {
      this.formData.append('zipFile', file);
      this.showZipName.nativeElement.value = file.name;
    }
  }
  // Get post body content from CkEditor
  getBodyContent($event) {
    this.form.controls['body'].setValue($event);
  }

  // Check for image and zip error
  checkImageError(controlName: string): boolean {
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
    this.imageError = this.checkImageError('image');
    Object.keys(this.form.value).forEach((key) => this.formData.append(key, this.form.value[key]));

    const url: string = '/src/app/_apis/admin/add-post.php';
    this._submitFormService._postData(url, this.formData).subscribe((data) => {
      this.openDialog();
      console.log(data);
    });
  }
  // Open dialog for result
  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialDialogueComponent, {
      width: '250px',
      data: { header: 'Upload Report', content: 'uploaded' }
    });
}
