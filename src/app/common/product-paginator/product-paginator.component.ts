import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-paginator',
  templateUrl: './product-paginator.component.html',
  styleUrls: ['./product-paginator.component.scss']
})
export class ProductPaginatorComponent implements OnInit {

  @Input() drugs: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
