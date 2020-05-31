import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { UVComponent } from './uv/uv.component';




@NgModule({
  declarations: [NavBarComponent, UVComponent, ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    NavBarComponent,

  ]
})
export class ComponentsModule { }
