import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartService, CartResponse } from '../../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent {
  itemsControl = new FormControl('', { nonNullable: true });
  lineControl = new FormControl('', { nonNullable: true });
  items: string[] = [];
  editIndex = -1;
  editValue = '';
  response?: CartResponse;
  loading = false;
  error?: string;
  errorDetail?: string;

  constructor(private cartService: CartService) {}

  addItem(): void {
    const value = this.lineControl.value.trim();
    if (!value) {
      return;
    }
    this.items.push(value);
    this.updateItemsControl();
    this.lineControl.setValue('');
  }

  startEdit(index: number): void {
    this.editIndex = index;
    this.editValue = this.items[index];
  }

  saveEdit(index: number): void {
    const value = this.editValue.trim();
    if (value) {
      this.items[index] = value;
    }
    this.editIndex = -1;
    this.editValue = '';
    this.updateItemsControl();
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
    this.updateItemsControl();
  }

  private updateItemsControl(): void {
    this.itemsControl.setValue(this.items.join('\n'));
  }

  submit(): void {
    let items = [...this.items];
    if (items.length === 0) {
      items = this.itemsControl.value
        .split('\n')
        .map((v) => v.trim())
        .filter((v) => v);
    }
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
