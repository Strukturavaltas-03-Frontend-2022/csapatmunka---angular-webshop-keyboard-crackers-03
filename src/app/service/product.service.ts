import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: Product[] = [];


  apiUrl: string = environment.apiUrl;

  constructor(private client: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.apiUrl}`);
  }

  get(product: Product): Observable<Product> {
    let url = `${environment.apiUrl}/${product.id}`;
    return this.client.get<Product>(url);}

  getCategoryById(categoryId: number): Observable<Product[]> {
    let url = `${environment.apiUrl}?categoryId=${categoryId}`;
    return this.client.get<Product[]>(url);
  }

  create(product: Product): Observable<Product> {
    return this.client.post<Product>(environment.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    let url = `${environment.apiUrl}/${product.id}`;
    return this.client.patch<Product>(url, product);
  }


  delete(product: Product): Observable<Product> {
    let url = `${environment.apiUrl}/${product.id}`;
    return this.client.delete<Product>(url);
  }
}
