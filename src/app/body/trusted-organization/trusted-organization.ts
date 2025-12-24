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
    { name: 'ABI Showatech', image: 'Industrial Clients/ABI showatech.jpg', category: 'Industrial' },
    { name: 'AI Optics', image: 'Industrial Clients/AI Optics Private Limited.png', category: 'Industrial' },
    { name: 'Arjuna Natural', image: 'Industrial Clients/Arjuna Natural Private Limited.png', category: 'Industrial' },
    { name: 'Ashok Leyland', image: 'Industrial Clients/Ashok Leyland Limited.png', category: 'Industrial' },
    { name: 'BGR Energy', image: 'Industrial Clients/BGR Energy Systems Limited.jpg', category: 'Industrial' },
    { name: 'Brakes India', image: 'Industrial Clients/Brakes India.jpg', category: 'Industrial' },
    { name: 'CPCL', image: 'Industrial Clients/CPCL.png', category: 'Industrial' },
    { name: 'Chem Fab Alkalis', image: 'Industrial Clients/Chem Fab Alkalis Limited.jpg', category: 'Industrial' },
    { name: 'Eppendorf India', image: 'Industrial Clients/Eppendorf India Private Limited.jpg', category: 'Industrial' },
    { name: 'GEA-BGR', image: 'Industrial Clients/GEA-BGR Limited.png', category: 'Industrial' },
    { name: 'GG Organics', image: 'Industrial Clients/GG Organics.png', category: 'Industrial' },
    { name: 'Gail India', image: 'Industrial Clients/Gail India Limited.png', category: 'Industrial' },
    { name: 'Green Star Fertilizer', image: 'Industrial Clients/Green Star fertilizer Limited.jpg', category: 'Industrial' },
    { name: 'IGCAR', image: 'Industrial Clients/IGCAR.jpg', category: 'Industrial' },
    { name: 'ITC Limited', image: 'Industrial Clients/ITC Limited.png', category: 'Industrial' },
    { name: 'Indian Oil', image: 'Industrial Clients/Indian Oil Corporation.png', category: 'Industrial' },
    { name: 'Kenpack Pharma', image: 'Industrial Clients/Kenpack Pharma Limited.png', category: 'Industrial' },
    { name: 'Kothari Petrochemical', image: 'Industrial Clients/Kothari Petrochemical Limited.jpg', category: 'Industrial' },
    { name: 'Larsen & Toubro', image: 'Industrial Clients/LARSEN & TOUBRO LIMITED.png', category: 'Industrial' },
    { name: 'Linde', image: 'Industrial Clients/Linde.jpg', category: 'Industrial' },
    { name: 'MRF Limited', image: 'Industrial Clients/MRF Limited.png', category: 'Industrial' },
    { name: 'ONGC', image: 'Industrial Clients/ONGC Limited.png', category: 'Industrial' },
    { name: 'Renault Nissan', image: 'Industrial Clients/Renault Nissan Technology & Business Centre India Private Limited.jpg', category: 'Industrial' },
    { name: 'SPIC', image: 'Industrial Clients/SPIC Limited.png', category: 'Industrial' },
    { name: 'TCP Limited', image: 'Industrial Clients/TCP Limited.png', category: 'Industrial' },
    { name: 'Tamilnadu Petroproducts', image: 'Industrial Clients/Tamilnadu Petroproducts Limited.jpg', category: 'Industrial' },
    { name: 'Travancore-Cochin Chemicals', image: 'Industrial Clients/Travancore-Cochin Chemicals Limited.png', category: 'Industrial' },
    { name: 'UCAL Fuel Systems', image: 'Industrial Clients/UCAL Fuel Systems Limited.png', category: 'Industrial' },
    { name: 'Ultramarine & Pigments', image: 'Industrial Clients/ultramarine & pigments limited.png', category: 'Industrial' },

    // Institutional
    { name: 'Anna University', image: 'Institutional Clients/Anna University.png', category: 'Institutional' },
    { name: 'Erode Sengunthar Engineering', image: 'Institutional Clients/Erode Sengunthar Engineering College.png', category: 'Institutional' },
    { name: 'IIT Madras', image: 'Institutional Clients/IIT Madras.png', category: 'Institutional' },
    { name: 'Kamaraj College', image: 'Institutional Clients/Kamaraj College Of Engineering & Technology.jpg', category: 'Institutional' },
    { name: 'Kongu Engineering', image: 'Institutional Clients/Kongu Engineering College.jpg', category: 'Institutional' },
    { name: 'Madras University', image: 'Institutional Clients/Madras University.jpg', category: 'Institutional' },
    { name: 'PMC Tech', image: 'Institutional Clients/PMC Tech.jpg', category: 'Institutional' },
    { name: 'Rajalakshmi Engineering', image: 'Institutional Clients/Rajalakshmi Engineering College.jpg', category: 'Institutional' },
    { name: 'Shiv Nadar University', image: 'Institutional Clients/Shiv Nadar University.jpg', category: 'Institutional' },
    { name: 'Shree Venkateshwara', image: 'Institutional Clients/Shree Venkateshwara Hi-Tech Engineering College.jpg', category: 'Institutional' },
    { name: 'Sona College', image: 'Institutional Clients/Sona College of Technology.jpg', category: 'Institutional' },
    { name: 'VIT University', image: 'Institutional Clients/VIT University.jpg', category: 'Institutional' },
    { name: 'Venkateshwara Engineering', image: 'Institutional Clients/Venkateshwara Engineering College.jpg', category: 'Institutional' },

    // International
    { name: 'All Nations University', image: 'International Clients/All Nations University, Ghana.png', category: 'International' },
    { name: 'DSP Industry', image: 'International Clients/DSP Industry Sdn Bhd.png', category: 'International' },
    { name: 'Eskayef Pharmaceuticals', image: 'International Clients/ESKAYEF PHARMACEUTICALS LIMITED.png', category: 'International' },
    { name: 'Farabi Petrochemicals', image: 'International Clients/Farabi Petrochemicals Company.png', category: 'International' },
    { name: 'Gulf Bio Analytical', image: 'International Clients/Gulf Bio Analytical.png', category: 'International' },
    { name: 'Intertek', image: 'International Clients/Intertek.png', category: 'International' },
    { name: 'Khalifa University', image: 'International Clients/Khalifa University.jpg', category: 'International' },
    { name: 'Labins', image: 'International Clients/Labins.png', category: 'International' },
    { name: 'Malay-Sino Chemical', image: 'International Clients/Malay-Sino Chemical Industries Sdn. Bhd,.jpg', category: 'International' },
    { name: 'Qatar Plastic', image: 'International Clients/Qatar Plastic Compounding Co.jpg', category: 'International' },
    { name: 'Sultan Qaboos University', image: 'International Clients/Sultan Qaboos University.png', category: 'International' },
    { name: 'Monocrom', image: 'International Clients/monocrom, Spain.png', category: 'International' }
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
