import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HintsComponent } from './hints/hints.component';
import { AddressFormComponent } from './form-components/address-form/address-form.component';
import { BankFormComponent } from './form-components/bank-form/bank-form.component';
import { BirthdayFormComponent } from './form-components/birthday-form/birthday-form.component';
import { BusynessFinancialFormComponent } from './form-components/busyness-financial-form/busyness-financial-form.component';
import { ChooseThemeFormComponent } from './form-components/choose-theme-form/choose-theme-form.component';
import { ContactFormComponent } from './form-components/contact-form/contact-form.component';
import { EducationFormComponent } from './form-components/education-form/education-form.component';
import { FinishFormComponent } from './form-components/finish-form/finish-form.component';
import { GenderFormComponent } from './form-components/gender-form/gender-form.component';
import { IdCardFormComponent } from './form-components/id-card-form/id-card-form.component';
import { IncognitoAvatarFormComponent } from './form-components/incognito-avatar-form/incognito-avatar-form.component';
import { LanguageTimezoneFormComponent } from './form-components/language-timezone-form/language-timezone-form.component';
import { NameFormComponent } from './form-components/name-form/name-form.component';
import { ProfilePictureFormComponent } from './form-components/profile-picture-form/profile-picture-form.component';
import { SkillsFormComponent } from './form-components/skills-form/skills-form.component';
import { WorkHistoryFormComponent } from './form-components/work-history-form/work-history-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    TopNavComponent,
    NameFormComponent,
    ProfilePictureFormComponent,
    IncognitoAvatarFormComponent,
    GenderFormComponent,
    BirthdayFormComponent,
    BusynessFinancialFormComponent,
    IdCardFormComponent,
    BankFormComponent,
    ContactFormComponent,
    AddressFormComponent,
    EducationFormComponent,
    SkillsFormComponent,
    WorkHistoryFormComponent,
    FinishFormComponent,
    ChooseThemeFormComponent,
    LanguageTimezoneFormComponent,
    HintsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
