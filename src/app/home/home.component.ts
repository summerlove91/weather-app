import { Component, OnInit, Input } from '@angular/core';
import {WeatherService} from '../weather.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() imgPath:string = "http://openweathermap.org/img/w/";
  imgFileName:string = ".png";

  location = {
    city:  'london,GB',
  };

  weather:any;
  weather2:any;
  value:any;
  list:any[];
  city: string;
  newCity: string;
  number: number;
  Math: any;

  constructor(private weatherService: WeatherService) {
    this.Math = Math;
    this.number = 2.5
  }

  ngOnInit() {

    this.value = localStorage.getItem('location');

      if (this.value!=null){
          this.location=JSON.parse(this.value);
      }
      else {
        this.location= {
        city:'paris,fr'
        }
      }

    this.weatherService.getWeather(this.location.city).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );

    this.weatherService.getMin(this.location.city).subscribe(
      response => {
        console.log(response);
        this.weather2=response;
      }
    )
  }

  saveForm(){
    let location = { city:this.city };
    localStorage.setItem('location', JSON.stringify(location));
    this.ngOnInit();
  }

  clearSearch() {
    this.city = null;
  }
}
