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
      label: '(UTC - 07:00 Central Time)',
      value: 7
    },
    {
      label: '(UTC - 08:00 Eastern Time)',
      value: 8
    },
    {
      label: '(UTC - 06:00  Mountain Time)',
      value: 6
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
