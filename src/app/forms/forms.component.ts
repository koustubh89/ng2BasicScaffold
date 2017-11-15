import { Component, OnInit } from '@angular/core';
// import { User } from '../shared/user.model'; // Using User constructor model

@Component({
  selector: 'app-sample-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
/* Import FormsModule and NgbModule in your app.module.ts */
export class FormsComponent implements OnInit {
  // user: User; // Using User constructor model from user.model.ts
  user: Object;
  dobOpened: boolean;
  cities: Array<string> = ['Gurgaon', 'Bangalore', 'Boston', ' Munich'];
  countries: Array<string> = ['India', 'USA', 'Germany'];
  selectedCountry: string;
  submitted = false;
  breadcrumbs: Array<object>;

  constructor() {
    // this.user = new User('', '', {}, '', ''); // Using User constructor model from user.model.ts
    this.user = {
      name: '',
      email: '',
      securityType: {},
      color: '',
      city: '',
      meeting: {}
    }
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

  onSubmit() {
    this.submitted = true;
  }
}
