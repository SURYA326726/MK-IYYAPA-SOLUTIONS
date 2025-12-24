import { Component } from '@angular/core';
import { Advertise } from "./advertise/advertise";
import { ProductList } from "./product-list/product-list";
import { TrustedOrganization } from './trusted-organization/trusted-organization';
import { AboutUs } from "./about-us/about-us";
import { ContactUs } from "./contact-us/contact-us";

import { Testimonials } from "./testimonials/testimonials";

@Component({
  selector: 'app-body',
  imports: [
    Advertise, 
    ProductList, 
    TrustedOrganization, 
    AboutUs, 
    ContactUs,

    Testimonials
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
