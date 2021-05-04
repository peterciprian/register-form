import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-theme-form',
  templateUrl: './choose-theme-form.component.html',
  styleUrls: ['./choose-theme-form.component.scss']
})
export class ChooseThemeFormComponent implements OnInit {

  public selected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
