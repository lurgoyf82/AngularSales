import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CartService, CartResponse } from '../../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  errorDetail?: string;

  constructor(private cartService: CartService) {}

  submit(): void {
    const text = this.itemsControl.value;
    const items = text
      .split('\n')
      .map((v) => v.trim())
      .filter((v) => v);
    this.loading = true;
    this.error = undefined;
    this.errorDetail = undefined;
    this.response = undefined;
    this.cartService.getCartResponse(items).subscribe({
      next: (res: CartResponse) => {
        this.response = res;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Cart request failed', error.message || error.status);
        this.error =
          error.error?.message ?? 'Errore nella richiesta. Riprova più tardi.';
        this.loading = false;
      }
    });
  }
}
