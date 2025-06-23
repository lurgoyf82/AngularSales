import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface CartRequest {
  items: string[];
}

export interface CartResponse {
  items: string[];
  salesTaxes: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) { }

  getCartResponse(request: CartRequest) {
    return this.http.post<CartResponse>(
      `${environment.apiUrl}/GetCartResponse`,
      request
    );
  }
}
