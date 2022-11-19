import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './navigation/nav/nav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PolicyComponent } from './components/policy/policy.component';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as Notiflix from 'notiflix';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateModule,
} from '@angular/material-moment-adapter';


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
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    RecaptchaV3Module,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MomentDateModule
    
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LfH_gUjAAAAAOuCtWb9UBXc30lXkov6Yufu76B5" },
    {provide: MY_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
