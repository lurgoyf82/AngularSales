import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BackendConfigService } from './backend-config.service';
import { CartRequest } from '../entities/DTOs/cart/requests/cart-request.dto';
import { CartResponse } from '../entities/DTOs/cart/responses/cart-response.dto';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(
    private http: HttpClient,
    private backendConfig: BackendConfigService
  ) {}

  getCartResponse(request: CartRequest): Observable<CartResponse> {
    const url = `${this.backendConfig.baseUrl}/GetCartResponse`;
    return this.http
      .post<CartResponse>(url, request)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          throwError(() => error.error ?? error)
        )
      );
  }
}
