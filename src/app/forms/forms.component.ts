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
  selectedCity: string;

  constructor() {
    this.user = new User('', '', {}, '', '');
  }

  ngOnInit() {
    this.selectedCity = 'Select a city';
  }

  changeCity(city) {
    console.log(city);
    this.selectedCity = city;
  }
}
