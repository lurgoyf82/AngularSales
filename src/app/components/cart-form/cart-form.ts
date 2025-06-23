import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-form.html',
  styleUrls: ['./cart-form.css']
})
export class CartFormComponent {
  constructor(private cartService: CartService) {}
}
