import { Component, OnInit } from '@angular/core';
import { TaskDBService } from '../core/servies/task-db.service';

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.scss']
})
export class TaskMainComponent implements OnInit {

  constructor(private db: TaskDBService) { }

  ngOnInit(): void {
    this.db.getTask("task00001");
  }

}
