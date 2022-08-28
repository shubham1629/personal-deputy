import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteMainComponent } from './note-main/note-main.component';

const routes: Routes = [
  {
    path: "",
    component: NoteMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
