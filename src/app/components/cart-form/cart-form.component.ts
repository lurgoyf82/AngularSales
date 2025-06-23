import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CartService, CartResponse } from '../../services/cart.service';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent {
  itemsControl = new FormControl('', { nonNullable: true });
  response?: CartResponse;
  loading = false;
  error?: string;

  constructor(private cartService: CartService) {}

  submit(): void {
    const text = this.itemsControl.value;
    const items = text
      .split('\n')
      .map((v) => v.trim())
      .filter((v) => v);
    this.loading = true;
    this.error = undefined;
    this.response = undefined;
    this.cartService.getCartResponse(items).subscribe({
      next: (res) => {
        this.response = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Errore nella richiesta';
        this.loading = false;
      }
    });
  }
}
