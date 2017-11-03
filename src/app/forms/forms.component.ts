import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-sample-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: User;
  dobOpened: boolean;
  cities: Array<string> = ['Gurgaon', 'Bangalore', 'Boston', ' Munich'];
  countries: Array<string> = ['India', 'USA', 'Germany'];
  selectedCountry: string;
  breadcrumbs: Array<object>;

  constructor() {
    this.user = new User('', '', {}, '', '');
  }

  ngOnInit() {
    this.selectedCountry = 'Select a country';
    this.breadcrumbs = [
      { text: 'Home', location: '/home', state: 'inactive' },
      { text: 'Forms', location: '/forms', state: 'active' }
    ]
  }

  changeCountry(country) {
    this.selectedCountry = country;
  }

  validateForm(form) {
    console.log(form);
  }
}
