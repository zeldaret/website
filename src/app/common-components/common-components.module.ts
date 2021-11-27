import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N64BoxComponent } from './n64-box/n64-box.component';
import { N64ButtonComponent } from './n64-button/n64-button.component';
import { RouterModule } from '@angular/router';

/**
 * Module that holds generic content box and button components of varying styles.
 */
@NgModule({
  declarations: [
    N64BoxComponent,
    N64ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    N64BoxComponent,
    N64ButtonComponent
  ]
})
export class CommonComponentsModule { }
