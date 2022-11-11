import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  drugs: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.drugs = this.productService.getAll();
  }
}
