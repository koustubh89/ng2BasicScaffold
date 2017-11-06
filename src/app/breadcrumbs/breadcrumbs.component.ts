import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<object>;

  constructor() { }

  ngOnInit() {
    this.breadcrumbs = [
      { text: 'Home', location: '/home', state: 'inactive' },
      { text: 'Forms', location: '/forms', state: 'active' }
    ]
  }
}
