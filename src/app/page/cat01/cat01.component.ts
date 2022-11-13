import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/app/drugs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  painKillers: Product[] = [];
  filterPhrase: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.painKillers = this.productService.getCategoryIdZero();
  }
}
