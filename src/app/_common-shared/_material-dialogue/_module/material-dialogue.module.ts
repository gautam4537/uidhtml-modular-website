import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../_material-module/material.module';
import { MaterialDialogueComponent } from '../material-dialogue.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [MaterialDialogueComponent],
    entryComponents: [
        MaterialDialogueComponent
    ],
    exports: [
        MaterialDialogueComponent
    ]
})

export class MaterialDialogueModule { }
