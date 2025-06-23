import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-form',
  template: `
    <form [formGroup]="cartForm" (ngSubmit)="submitCart()">
      <div formArrayName="items">
        <div *ngFor="let item of items.controls; let i = index">
          <input [formControlName]="i" placeholder="Enter item (e.g., '1 book at 12.49')" />
          <button type="button" (click)="removeItem(i)">Remove</button>
        </div>
      </div>
      <button type="button" (click)="addItem()">Add Item</button>
      <button type="submit" [disabled]="cartForm.invalid">Submit</button>
    </form>
  `
})
export class CartFormComponent {
  @Output() cartSubmitted = new EventEmitter<any>();
  cartForm: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.cartForm = this.fb.group({
      items: this.fb.array([this.fb.control('')])
    });
  }

  get items() {
    return this.cartForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.fb.control(''));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  submitCart() {
    const payload = { items: this.cartForm.value.items };
    this.cartService.getCartResponse(payload).subscribe(response => {
      this.cartSubmitted.emit(response);
    });
  }
}