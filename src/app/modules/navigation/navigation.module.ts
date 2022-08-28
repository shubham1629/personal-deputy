import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMainComponent } from './nav-main/nav-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavMainComponent
  ]
})
export class NavigationModule { }
