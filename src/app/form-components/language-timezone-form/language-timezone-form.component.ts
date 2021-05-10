import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-language-timezone-form',
  templateUrl: './language-timezone-form.component.html',
  styleUrls: ['./language-timezone-form.component.scss']
})
export class LanguageTimezoneFormComponent implements OnInit {

  public date = new Date(Date.now());
  constructor(
    public navService: NavigationService,
    public formData: FormDataService
    ) { }

  ngOnInit(): void {
  }

  fast(): void {
    this.navService.regFormType.next('fast');
    this.navService.next()
  }
  detailed(): void {
    this.navService.regFormType.next('detailed');
    this.navService.next()
  }
}
