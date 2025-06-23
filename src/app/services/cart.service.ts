import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CartResponse {
  items: string[];
  salesTaxes: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient) {}

  getCartResponse(items: string[]): Observable<CartResponse> {
    return this.http.post<CartResponse>(
      `${environment.apiUrl}/GetCartResponse`,
      { items }
    );
  }
}
