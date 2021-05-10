import { Injectable } from '@angular/core';

export interface IFormData {
  language: string;
  timeZone: number;
  adjustTimeZone: boolean;
  title: string;
  fullName: string;
  accostName: string;
  nickname: string;

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

  public titles = [
    'Mrs',
    'Ms',
    'Mr',
    'Dr'
  ];

  public formData: IFormData;

  constructor() {
    this.formData = {
      language: "English",
      timeZone: 8,
      adjustTimeZone: true,
      title: "Mrs",
      fullName: "",
      accostName: "",
      nickname: "",
    }
   }
}
