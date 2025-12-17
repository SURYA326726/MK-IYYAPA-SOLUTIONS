import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css'
})
export class ProductModal {
  @Input() product:any;
  @Output() close=new EventEmitter();

  constructor(private router:Router){}

  closeModal(){
    this.close.emit();
  }
  navigateToQuote(){
      this.router.navigate(['/newQuote'],{state:{product:this.product}})
      console.log(this.product.name)
  }
get productServices(): string[] {
  return this.product?.productService
    ? this.product.productService
        .split(',')
        .map((s: string) => s.trim())
    : [];
}

}
