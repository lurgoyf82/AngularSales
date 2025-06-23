import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-output',
  template: `
    <div *ngIf="response">
      <h3>Response</h3>
      <ul>
        <li *ngFor="let item of response.items">{{ item }}</li>
      </ul>
      <p>Sales Taxes: {{ response.salesTaxes }}</p>
      <p>Total: {{ response.total }}</p>
    </div>
  `
})
export class CartOutputComponent {
  @Input() response: any;
}