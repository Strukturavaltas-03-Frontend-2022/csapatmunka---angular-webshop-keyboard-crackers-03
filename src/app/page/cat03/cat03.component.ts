import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {
  stimulants: Product[] = [];
  filterPhrase: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategoryById(2).subscribe((data:Product[]) => this.stimulants = data);
  }

}
