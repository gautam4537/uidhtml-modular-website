import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatBadgeModule,
        MatDialogModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatBadgeModule,
        MatDialogModule
    ]
})

export class MaterialModule {}
