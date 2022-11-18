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
  newProduct:Product = new Product();

  constructor(public productService: ProductService) {}

  onSave(product: Product): void {
    if(product.id === -1) {
      product.id = this.products.length + 1;
      this.productService.create(product).subscribe((data:Product) => {
        this.newProduct = new Product();
        this.productService.getAll().subscribe((data:Product[]) =>this.products = data);
      })
    } else {
      this.productService.update(product).subscribe((data:Product) => {
         this.productService.getAll().subscribe((data:Product[]) =>this.products = data);
      });
    }
  }

  onDelete(product:Product): void {
    this.productService.delete(product).subscribe((data:Product) => {
      this.productService.getAll().subscribe((data:Product[]) =>this.products = data);
    }); 
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data:Product[]) =>this.products = data); 
  }
}
