import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertics.html',
  styleUrl: './advertics.css'
})
export class Advertics implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://gomath-backend.onrender.com/products').subscribe((res: any) => {
      this.products = res.data;
    });
  }
}
