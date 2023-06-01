import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module  } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MaterialModule, 
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaV3Module 
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
