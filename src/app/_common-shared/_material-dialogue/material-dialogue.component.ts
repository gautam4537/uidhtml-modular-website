import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-material-dialogue',
  templateUrl: './material-dialogue.component.html',
  styleUrls: ['./material-dialogue.component.scss']
})
export class MaterialDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<MaterialDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
