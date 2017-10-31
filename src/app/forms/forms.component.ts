import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-ui-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User(null);
  }

  ngOnInit() {
    // this.getPosts();
  }
}
