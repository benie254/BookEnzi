import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
