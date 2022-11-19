import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookComponent } from './components/book/book.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import * as Notiflix from 'notiflix';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateModule,
} from '@angular/material-moment-adapter';
import { BookingConfirmedComponent } from './components/booking-confirmed/booking-confirmed.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MM'
  },
};


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    BookComponent,
    BookingConfirmedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MomentDateModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LfH_gUjAAAAAOuCtWb9UBXc30lXkov6Yufu76B5" },
    { provide: MAT_DATE_FORMATS, useValue: {
      parse: {
        dateInput: ['l', 'LL'],
      },
      display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY-MM-DD',
      },
    },
  },
],
})
export class HomeModule { }
