import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartService } from '../../services/cart.service';
import { CartResponse } from '../../entities/DTOs/cart/responses/cart-response.dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent {
  itemsControl = new FormControl('', { nonNullable: true });
  newItemControl = new FormControl('', { nonNullable: true });
  items: string[] = [];
  editingIndex: number | null = null;

  response?: CartResponse;
  loading = false;
  error?: string;
  errorDetail?: string;

  constructor(private cartService: CartService) {}

  addItem(): void {
    const value = this.newItemControl.value.trim();
    if (!value) {
      this.newItemControl.setValue('');
      return;
    }
    if (this.editingIndex !== null) {
      this.items[this.editingIndex] = value;
      this.editingIndex = null;
    } else {
      this.items.push(value);
    }
    this.updateItemsControl();
    this.newItemControl.setValue('');
  }

  startEdit(index: number): void {
    this.newItemControl.setValue(this.items[index]);
    this.editingIndex = index;
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
    this.updateItemsControl();
  }

  private updateItemsControl(): void {
    this.itemsControl.setValue(this.items.join('\n'));
  }

  submit(): void {
    if (this.newItemControl.value.trim()) {
      this.addItem();
    }
    const items = this.items;
    this.loading = true;
    this.error = undefined;
    this.errorDetail = undefined;
    this.response = undefined;
    this.cartService.getCartResponse({ items }).subscribe({
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
