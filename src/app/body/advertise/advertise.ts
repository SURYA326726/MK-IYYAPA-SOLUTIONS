import { Component } from '@angular/core';

@Component({
  selector: 'app-advertise',
  imports: [],
  templateUrl: './advertise.html',
  styleUrl: './advertise.css'
})
export class Advertise {
  imageIndex = 0;
  
  // List of images to cycle through
  images: string[] = [
    'hero-bg.png',
    'civil.svg',
    'electrical.svg',
    'it_support.svg',
    'solar.svg'
  ];

  currentImage = this.images[0];

  ngOnInit() {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];
    }, 2000); // 2 seconds
  }

  scrollToProducts() {
    const element = document.getElementById('productList');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToContact() {
    const element = document.getElementById('contactUs');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
