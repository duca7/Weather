import { WeatherService } from './../service/weather.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { UVComponent } from './uv/uv.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule,} from '@angular/common/http';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { locationReducer } from './location-reducer';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    NavBarComponent,
    UVComponent,
    CurrentWeatherComponent,
    ForecastComponent, ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    StoreModule.forRoot({
      loc:locationReducer
    }),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    NavBarComponent,
    UVComponent,
    ForecastComponent,
    CurrentWeatherComponent

  ],
  providers:[
    WeatherService
  ]
})
export class ComponentsModule { }
