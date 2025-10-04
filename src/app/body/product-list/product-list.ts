import { Component } from '@angular/core';
import { Product } from "./product/product";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [Product, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

   products = [
    {
      productHeading: 'Emines',
      productContent: 'Used to do Emine based works',
      productImg: 'Emining.webp'
    },
    {
      productHeading: 'Eschool',
      productContent: 'Used to record school data',
      productImg: 'Eschool.webp'
    },
    {
      productHeading: 'Emines',
      productContent: 'Used to do Emine based works',
      productImg: 'Emining.webp'
    },
    {
      productHeading: 'Eschool',
      productContent: 'Used to record school data',
      productImg: 'Eschool.webp'
    },
    {
      productHeading: 'Emines',
      productContent: 'Used to do Emine based works',
      productImg: 'Emining.webp'
    },
    {
      productHeading: 'Eschool',
      productContent: 'Used to record school data',
      productImg: 'Eschool.webp'
    },
    {
      productHeading: 'Emines',
      productContent: 'Used to do Emine based works',
      productImg: 'Emining.webp'
    },
    {
      productHeading: 'Eschool',
      productContent: 'Used to record school data',
      productImg: 'Eschool.webp'
    }
  ];

}
