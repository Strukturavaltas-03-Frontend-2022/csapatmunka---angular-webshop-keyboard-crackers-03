import { Drugs } from './../../drugs';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService, IDrugsColumn } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss'],
})
export class DrugListComponent implements OnInit {
  columns: IDrugsColumn[] = this.config.drugsColumns;

  drugList$: Observable<Product[]> = this.productService.getAll();


  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  onDelete(drug: Product): void {
    this.productService
      .delete(drug)
      .subscribe((car) => (this.drugList$ = this.productService.getAll()));
  }
}
