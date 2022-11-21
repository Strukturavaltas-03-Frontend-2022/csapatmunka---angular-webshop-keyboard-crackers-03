import { Injectable } from '@angular/core';


export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface IDrugsColumn {
  title: string;
  key: string;
}

export class FormField {
  label: string = '';
  key: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Pharmacy of Keyboard Crackers';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Painkillers', link: '/cat01' },
    { text: 'Sedatives', link: '/cat02' },
    { text: 'Stimulants', link: '/cat03' },
    { text: 'Illegal stuffs', link: '/cat04' },
    { text: 'Admin', link: '/admin' },
  ];

  drugsColumns: IDrugsColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Description', key: 'description' },
    { title: 'Price', key: 'price' },
    { title: 'Stock', key: 'stock' },
    { title: 'Featured', key: 'featured' },
    { title: 'Active', key: 'active' },
    { title: 'Category', key: 'categoryId' },
  ];

  drugsEditor: FormField[] = [
    { label: 'Name', key: 'name' },
    { label: 'Description', key: 'description' },
    { label: 'Price', key: 'price' },
    { label: 'Stock', key: 'stock' },
    { label: 'Featured', key: 'featured' },
    { label: 'Active', key: 'active' },
    { label: 'Category', key: 'categoryId' },
  ];

  constructor() {}
}
