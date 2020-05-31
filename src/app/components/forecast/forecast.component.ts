import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  forecast: any = <any>{};
  msg: string;
  constructor(
    private store: Store<any>,
    private weatherService : WeatherService
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })

   }

  ngOnInit(): void {
  }

  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {
}, () => {
        this.searchForecast(loc);
      })
  }
  searchForecast(loc: string) {
    this.weatherService.getForecast(loc)
      .subscribe(res => {
        this.forecast = res;
      }, err => {
})
  }
  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
