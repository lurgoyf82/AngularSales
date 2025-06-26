import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartFormComponent } from './components/cart-form/cart-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sales';
}
