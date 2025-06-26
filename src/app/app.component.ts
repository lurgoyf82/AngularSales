import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartFormComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sales';
}
