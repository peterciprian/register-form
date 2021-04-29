import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/theme', pathMatch: 'full' },
  { path: 'address', component: AddressFormComponent },
  { path: 'bank', component: BankFormComponent },
  { path: 'birthday', component: BirthdayFormComponent },
  { path: 'busyness', component: BusynessFinancialFormComponent },
  { path: 'theme', component: ChooseThemeFormComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'education', component: EducationFormComponent },
  { path: 'finish', component: FinishFormComponent },
  { path: 'gender', component: GenderFormComponent },
  { path: 'id-card', component: IdCardFormComponent },
  { path: 'avatar', component: IncognitoAvatarFormComponent },
  { path: 'language', component: LanguageTimezoneFormComponent },
  { path: 'name', component: NameFormComponent },
  { path: 'profile-picture', component: ProfilePictureFormComponent },
  { path: 'skills', component: SkillsFormComponent },
  { path: 'work-history', component: WorkHistoryFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
