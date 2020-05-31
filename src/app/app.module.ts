import { WeatherService } from './service/weather.service';
import { LoginModule } from './pages/login/login.module';
import { HeadModule } from './pages/head/head.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { reduce } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule,
    HeadModule,
    LoginModule,
    ComponentsModule,
    HttpClientModule

  ],
  providers: [
    WeatherService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
