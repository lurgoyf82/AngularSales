import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartRequest, CartResponse } from '../../services/cart.service';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-form.html',
  styleUrls: ['./cart-form.css']
})
export class CartFormComponent {
  itemsText = '';
  response?: CartResponse;

  constructor(private cartService: CartService) { }

  submit() {
    const request: CartRequest = {
      items: this.itemsText.split('\n').filter(line => line.trim() !== ''),
    };

    this.cartService.getCartResponse(request).subscribe(res => {
      this.response = res;
    });
  }
}
