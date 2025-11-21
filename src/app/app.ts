import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Body } from "./body/body";
import { Footer } from "./footer/footer";
import { Admin } from "./body/admin/admin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, Footer, Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GomathTechnology');
}
