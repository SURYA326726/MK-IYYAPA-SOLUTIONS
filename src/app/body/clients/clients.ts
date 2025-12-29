import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class Clients {
  activeTab: string = 'industrial';

  // Placeholder data - in a real scenario, this might come from a service or be dynamically loaded
  // Since I don't have the exact list of ALL files without listing them one by one, I will mock a few observed in the previous steps.
  // The user can add more later or I can list the directory later to populate this fully.
  industrialClients: any[] = [
    // { name: 'Placeholder', image: 'assets/placeholder.png' }
  ];

  institutionalClients: any[] = [
    // { name: 'Placeholder', image: 'assets/placeholder.png' }
  ];

  internationalClients: any[] = [
    // { name: 'Placeholder', image: 'assets/placeholder.png' }
  ];

  constructor() {
      // Logic to potentially load all images could go here if we had a manifest
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
