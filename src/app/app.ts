import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartFormComponent } from './components/cart-form/cart-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartFormComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'angular-sales';
}
