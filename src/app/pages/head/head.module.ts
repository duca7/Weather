import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadRoutingModule } from './head-routing.module';
import { HeadComponent } from './head.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeadComponent],
  imports: [
    CommonModule,
    HeadRoutingModule,
    MatButtonModule
  ]
})
export class HeadModule { }
