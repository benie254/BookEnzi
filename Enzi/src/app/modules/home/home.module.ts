import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { DetailsComponent } from './components/details/details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookComponent } from './components/book/book.component'


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    DetailsComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatExpansionModule,
  ],
  exports: [
    MatExpansionModule,
  ]
})
export class HomeModule { }
