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
    MatDividerModule
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
        MatDividerModule
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
        MatDividerModule
    ]
})

export class MaterialModule {}
