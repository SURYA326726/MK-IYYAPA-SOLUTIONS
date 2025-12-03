import { Component, Input,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input()
  productContainer= {
    productName: '',
    productImage: '',
    productPrice: '',
    productDescription: '',
    productService: ''
  };
@Output() openModal = new EventEmitter();
openProduct() {
  this.openModal.emit(this.productContainer);
}

}
