import { Component } from '@angular/core';

@Component({
  selector: 'app-advertise',
  imports: [],
  templateUrl: './advertise.html',
  styleUrl: './advertise.css'
})
export class Advertise {
  imageIndex = 0;
  
  // List of images to cycle through (using product paths)
  images: string[] = [
    'hero-bg.png', // Start with hero
    'PRODUCTS/Education Engineering Equipments/ASTM Distillation.png',
    'PRODUCTS/Electrochemical cells/Electrochemical Cell.png',
    'PRODUCTS/Laboratory Instruments/Muffle Furnace.png',
    'PRODUCTS/Laboratory Platinum Wares/Platinum Labwares.png',
    'PRODUCTS/PETROELUM TESTING INSTRUMENTS/All Glass Distillation Unit.png',
    'PRODUCTS/PILOT PLANTS/Distillation Plant.png'
  ];

  currentImage = this.images[0];

  ngOnInit() {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];
    }, 8000); // 8 seconds
  }
}
