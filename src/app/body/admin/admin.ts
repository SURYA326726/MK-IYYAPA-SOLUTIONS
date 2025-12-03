import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

   constructor(private http:HttpClient){}

  //  addProduct(){
  //   this.http.post("http://localhost:3000/product",)
  //  }

}
