import { Injectable } from '@angular/core';

export interface IFormData {
  language: string;
  timeZone: number;
  adjustTimeZone: boolean;

}
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  public languages = [
    'English',
    'Deutsch',
    'Magyar'
  ]

  public timeZones = [
    {
      label: '(UTC - 07:00( Mountain Time ( US & Canada)',
      value: 7
    }
  ]

  public formData: IFormData;

  constructor() {
    this.formData = {
      language: "English",
      timeZone: 0,
      adjustTimeZone: true,
    }
   }
}
