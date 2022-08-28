import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "task",
    loadChildren: ()=> import("./modules/task/task.module").then(m=>m.TaskModule)
  },
  {
    path: "dashboard",
    loadChildren: ()=> import("./modules/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path: "note",
    loadChildren: ()=> import("./modules/note/note.module").then(m=>m.NoteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
