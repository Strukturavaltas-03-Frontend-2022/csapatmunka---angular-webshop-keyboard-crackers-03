import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drugs } from '../drugs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: Product[] = [];

  constructor() {}

  getAll(): Product[]  {
    return Drugs;
  }

  getCategoryIdZero(): Product[]{
    return Drugs.filter(item => item.categoryId === 0)
  }

  getCategoryIdOne(): Product[]{
    return Drugs.filter(item => item.categoryId === 1)
  }

  getCategoryIdTwo(): Product[]{
    return Drugs.filter(item => item.categoryId === 2)
  }

  getCategoryIdThree(): Product[]{
    return Drugs.filter(item => item.categoryId === 3)
  }
}
