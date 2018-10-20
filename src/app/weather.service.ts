import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class WeatherService {

  apiKey='fef19c6435baa416a24ed649f017af66';
  url;
  currenturl;

  constructor(public http: Http){
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
    this.currenturl='http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city){
    return this.http.get(this.url + city + '&units=imperial' + '&APPID='+ this.apiKey).pipe(map(( res => res.json())));
  }

  getMin(city){
    return this.http.get(this.currenturl + city + '&units=imperial' + '&APPID='+ this.apiKey).pipe(map(( res => res.json())));
  }

}
