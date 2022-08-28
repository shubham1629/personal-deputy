import { Component, OnInit } from '@angular/core';
import NavConfig from '../navConfig';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  items = NavConfig.items;

  constructor() { }

  ngOnInit(): void {
  }

}
