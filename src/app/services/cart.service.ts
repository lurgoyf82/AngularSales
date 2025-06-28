import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CartRequest } from '../entities/DTOs/cart/requests/cart-request.dto';
import { CartResponse } from '../entities/DTOs/cart/responses/cart-response.dto';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient) {}

  getCartResponse(request: CartRequest): Observable<CartResponse> {
    return this.http
      .post<CartResponse>(`${environment.apiUrl}/GetCartResponse`, request)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          throwError(() => error.error ?? error)
        )
      );
  }
}
