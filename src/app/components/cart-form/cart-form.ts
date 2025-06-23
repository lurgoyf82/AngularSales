import { Component } from '@angular/core';
import { CartService, CartRequest, CartResponse } from '../../services/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
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
