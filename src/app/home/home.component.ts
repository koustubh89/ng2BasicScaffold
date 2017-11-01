import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showTabularView: boolean;

  constructor() {
    this.showTabularView = true;
  }

  ngOnInit() {
    // this.getPosts();
  }
}
