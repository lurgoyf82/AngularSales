import { TestBed } from '@angular/core/testing';
import { CartFormComponent } from './cart-form.component';
import { CartService } from '../../services/cart.service';
import { throwError } from 'rxjs';

class MockCartService {
  getCartResponse() {
    return throwError(() => ({ message: 'bad request', status: 400 }));
  }
}

describe('CartFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartFormComponent],
      providers: [{ provide: CartService, useClass: MockCartService }]
    }).compileComponents();
  });

  it('should display error details when service fails', () => {
    const fixture = TestBed.createComponent(CartFormComponent);
    const component = fixture.componentInstance;
    component.itemsControl.setValue('item');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const err = fixture.nativeElement.querySelector('.error');
    expect(err.textContent).toContain('Errore nella richiesta');
    expect(err.textContent).toContain('bad request');
  });
});
