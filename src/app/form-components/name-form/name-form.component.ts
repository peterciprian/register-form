import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {

  constructor(
    public navService: NavigationService,
    public formData: FormDataService
  ) { }

  ngOnInit(): void {
  }

}
