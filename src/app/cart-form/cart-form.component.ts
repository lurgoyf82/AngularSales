import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-form',
  template: `
    <form (ngSubmit)="submit()">
      <textarea
        rows="6"
        [(ngModel)]="itemsText"
        name="items"
        style="width: 100%;"
      ></textarea>
      <button type="submit">Submit</button>
    </form>

    <div *ngIf="response">
      <ul>
        <li *ngFor="let item of response.items">{{ item }}</li>
      </ul>
      <p>Sales Taxes: {{ response.salesTaxes }}</p>
      <p>Total: {{ response.total }}</p>
    </div>
  `,
  styles: [
    `form { margin-bottom: 1rem; }`
  ]
})
export class CartFormComponent {
  @Output() cartSubmitted = new EventEmitter<any>();

  itemsText = '';
  response: any;

  constructor(private cartService: CartService) {}

  submit() {
    const items = this.itemsText
      .split('\n')
      .map(i => i.trim())
      .filter(i => i);

    const payload = { items };
    this.cartService.getCartResponse(payload).subscribe(res => {
      this.response = res;
      this.cartSubmitted.emit(res);
    });
  }
}