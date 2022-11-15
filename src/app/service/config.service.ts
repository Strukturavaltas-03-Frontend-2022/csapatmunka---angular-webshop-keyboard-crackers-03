import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Pharmacy of Keyboard Crackers';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Painkillers', link: '/cat01'},
    {text: 'Sedatives', link: '/cat02'},
    {text: 'Stimulants', link: '/cat03'},
    {text: 'Illegal stuffs', link: '/cat04'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() { }
}
