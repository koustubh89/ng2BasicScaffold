import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: string;

  constructor() { }

  ngOnInit() {
    this.user = 'dummy name';
  }

}
