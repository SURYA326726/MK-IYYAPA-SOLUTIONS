import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trusted-organization',
  imports: [CommonModule],
  templateUrl: './trusted-organization.html',
  styleUrl: './trusted-organization.css'
})
export class TrustedOrganization implements OnInit {
  categories = ['Industrial', 'Institutional', 'International'];
  selectedCategory = 'Industrial';

  // Full list of clients
  allClients = [
    // Industrial
    { name: 'ITC Limited', image: 'assets/clients/industrial/ITC Limited.png', category: 'Industrial' },
    { name: 'MRF Limited', image: 'assets/clients/industrial/MRF Limited.png', category: 'Industrial' },
    { name: 'Larsen & Toubro', image: 'assets/clients/industrial/LARSEN & TOUBRO LIMITED.png', category: 'Industrial' },
    { name: 'Ashok Leyland', image: 'assets/clients/industrial/Ashok Leyland Limited.png', category: 'Industrial' },
    { name: 'Brakes India', image: 'assets/clients/industrial/Brakes India.jpg', category: 'Industrial' },
    { name: 'BGR Energy', image: 'assets/clients/industrial/BGR Energy Systems Limited.jpg', category: 'Industrial' },
    { name: 'CPCL', image: 'assets/clients/industrial/CPCL.png', category: 'Industrial' },
    { name: 'Gail India', image: 'assets/clients/industrial/Gail India Limited.png', category: 'Industrial' },
    { name: 'Indian Oil', image: 'assets/clients/industrial/Indian Oil Corporation.png', category: 'Industrial' },
    { name: 'ONGC', image: 'assets/clients/industrial/ONGC Limited.png', category: 'Industrial' },
    { name: 'Renault Nissan', image: 'assets/clients/industrial/Renault Nissan Technology & Business Centre India Private Limited.jpg', category: 'Industrial' },
    
    // Institutional
    { name: 'Anna University', image: 'assets/clients/institutional/Anna University.png', category: 'Institutional' },
    { name: 'IIT Madras', image: 'assets/clients/institutional/IIT Madras.png', category: 'Institutional' },
    { name: 'VIT University', image: 'assets/clients/institutional/VIT University.jpg', category: 'Institutional' },
    { name: 'Madras University', image: 'assets/clients/institutional/Madras University.jpg', category: 'Institutional' },
    { name: 'Kongu Engineering', image: 'assets/clients/institutional/Kongu Engineering College.jpg', category: 'Institutional' },
    { name: 'Shiv Nadar University', image: 'assets/clients/institutional/Shiv Nadar University.jpg', category: 'Institutional' },

    // International
    { name: 'Intertek', image: 'assets/clients/international/Intertek.png', category: 'International' },
    { name: 'Sultan Qaboos University', image: 'assets/clients/international/Sultan Qaboos University.png', category: 'International' },
    { name: 'Khalifa University', image: 'assets/clients/international/Khalifa University.jpg', category: 'International' },
    { name: 'All Nations University', image: 'assets/clients/international/All Nations University, Ghana.png', category: 'International' },
    { name: 'Farabi Petrochemicals', image: 'assets/clients/international/Farabi Petrochemicals Company.png', category: 'International' }
  ];

  filteredClients: any[] = [];

  ngOnInit() {
    this.filterClients(this.selectedCategory);
  }

  filterClients(category: string) {
    this.selectedCategory = category;
    this.filteredClients = this.allClients.filter(client => client.category === category);
  }
}
