import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CursorComponent } from './cursor.component';

@NgModule({
  declarations: [
    CursorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursorComponent
  ]
})
export class CursorModule { }
