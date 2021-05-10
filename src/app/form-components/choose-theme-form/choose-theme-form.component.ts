import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-choose-theme-form',
  templateUrl: './choose-theme-form.component.html',
  styleUrls: ['./choose-theme-form.component.scss']
})
export class ChooseThemeFormComponent implements OnInit {

  public selected: string = '';

  constructor(public navService: NavigationService) { }

  ngOnInit(): void {
  }

}
