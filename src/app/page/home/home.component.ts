import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() drugs: Product[] = [];
  featuredDrugs:Product[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data:Product[]) =>{
      this.drugs = data;
      this.featuredDrugs = data.filter(drug => drug.featured).slice(0, 5);
    }); 
  }
}
