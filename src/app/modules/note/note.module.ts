import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteMainComponent } from './note-main/note-main.component';


@NgModule({
  declarations: [
    NoteMainComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule
  ]
})
export class NoteModule { }
