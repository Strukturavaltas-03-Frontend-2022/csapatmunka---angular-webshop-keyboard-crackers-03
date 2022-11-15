import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() onSaveEmitter = new EventEmitter();

  constructor() { }

  onSave(): void {
    this.onSaveEmitter.emit(this.product);
  }

  ngOnInit(): void {
  }

}
