import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartFormComponent, ToolbarComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sales';
}
