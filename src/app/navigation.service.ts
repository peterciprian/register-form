import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
export interface navMenu {
  index: number,
  label:string,
  path: string,
  show: string[],
}
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private menuList: navMenu[] = [];
  public navMenuList: navMenu[] = [];
  public showMenuList: navMenu[] = [];
  public regFormType =new BehaviorSubject<string>('detailed');
  public activeMenu = new BehaviorSubject<navMenu | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.regFormType.subscribe( regformType => {
      this.http.get<navMenu[]>('assets/nav-conf.json').subscribe( data => {
        this.menuList = data;
        this.navMenuList = this.menuList.filter(menu => {
          return menu.show.some(e => {
            return e === this.regFormType.value;
          }) || menu.show.length == 0;
        })
        this.showMenuList = this.navMenuList.filter(menu => {
          return menu.show.some(e => {
            return e === this.regFormType.value;
          })
        })
      })
    })
  }

  public next(): void {
    let activeMenuIndex: number = this.getActiveMenuIndex();

    if (activeMenuIndex > -1 && this.navMenuList[activeMenuIndex +1])
    this.router.navigate([this.navMenuList[activeMenuIndex +1].path])
  }
  
  public prev(): void {
    let activeMenuIndex: number = this.getActiveMenuIndex();

    if (activeMenuIndex > -1 && this.navMenuList[activeMenuIndex -1])
    this.router.navigate([this.navMenuList[activeMenuIndex -1].path])
  }

  public getActiveMenuIndex(): number {
    return this.navMenuList.findIndex( menu => {
      return menu.path === this.router.routerState.snapshot.url;
    })
  }

  public getActiveMenuLabel(): string {
    let index = this.navMenuList.findIndex( menu => {
      return menu.path === this.router.routerState.snapshot.url;
    });
    return index>-1 ? this.navMenuList[index].label : '';
  }
}
