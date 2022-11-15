import { Component, OnInit } from '@angular/core';
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
    this.productService.getCategoryById(0).subscribe((data:Product[]) => this.painKillers = data);
  }
}
