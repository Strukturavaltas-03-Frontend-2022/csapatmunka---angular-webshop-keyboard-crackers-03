import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
 
  products:Product[] = [];

  constructor(public productService: ProductService) {}

  onSave(product: Product): void {
    this.productService.update(product).subscribe((data:Product) => console.log(data));
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data:Product[]) =>this.products = data); 
  }
}
