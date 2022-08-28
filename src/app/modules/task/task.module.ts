import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskMainComponent } from './task-main/task-main.component';
import { TaskDBService } from './core/servies/task-db.service';


@NgModule({
  declarations: [
    TaskMainComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  providers: [
    TaskDBService
  ]
})
export class TaskModule { }
