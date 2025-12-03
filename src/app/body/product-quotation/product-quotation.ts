import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-quotation',
  imports: [FormsModule],
  templateUrl: './product-quotation.html',
  styleUrl: './product-quotation.css'
})
export class ProductQuotation {
   
  product: any;

  qty = 1;
  price = 0;
  discount = 0;
  gst = 0;
  total = 0;

  constructor(private location: Location,private router:ActivatedRoute) {}

  ngOnInit(){
        this.product=history.state.product
        console.log(this.product)
  }

  calculateTotal() {
    let amount = this.qty * this.price;

    if (this.discount > 0) {
      amount = amount - (amount * this.discount / 100);
    }

    if (this.gst > 0) {
      amount = amount + (amount * this.gst / 100);
    }

    this.total = amount;
  }

  submitQuote() {
    console.log("Quote Submitted Successfully");
    alert("Quotation Created Successfully!");
  }

  goBack() {
     this.location.back();
  }
}
