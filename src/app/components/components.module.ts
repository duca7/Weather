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
@NgModule({
  declarations: [NavBarComponent, UVComponent, CurrentWeatherComponent, ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    StoreModule,
    HttpClientModule,
  ],
  exports:[
    NavBarComponent,
    UVComponent

  ]
})
export class ComponentsModule { }
