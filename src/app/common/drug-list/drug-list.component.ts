import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService, IDrugsColumn } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

class EditableProduct extends Product {
  editable?: boolean = false;
}

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss'],
})
export class DrugListComponent implements OnInit {

    editMode: boolean = false;

  editModes: boolean[] = [];
  columns: IDrugsColumn[] = this.config.drugsColumns;



  drugList$: Observable<EditableProduct[]> = this.productService.getAll();

  @Input() product: Product = new Product();
  @Output() onSaveEmitter = new EventEmitter();
  @Output() onDeleteEmitter = new EventEmitter();

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  onSave(drug: EditableProduct): void {
    this.productService
      .update(drug)
      .subscribe((drug) => (this.drugList$ = this.productService.getAll()));
  }

  onDelete(drug: Product): void {
    this.productService
      .delete(drug)
      .subscribe((drug) => (this.drugList$ = this.productService.getAll()));
  }
}
