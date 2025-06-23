import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Angular Sales</h1>
      <app-cart-form (cartSubmitted)="onCartSubmitted($event)"></app-cart-form>
      <app-cart-output [response]="cartResponse"></app-cart-output>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  cartResponse: any = null;

  onCartSubmitted(response: any) {
    this.cartResponse = response;
  }
}