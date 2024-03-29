import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { N64BoxComponent } from './n64-box/n64-box.component';
import { N64ButtonComponent } from './n64-button/n64-button.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * Module that holds generic content box and button components of varying styles.
 */
@NgModule({
  declarations: [
    N64BoxComponent,
    N64ButtonComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  exports: [
    N64BoxComponent,
    N64ButtonComponent
  ]
})
export class CommonComponentsModule { }
