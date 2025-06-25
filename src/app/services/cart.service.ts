import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCartResponse(items: string[]): Observable<string> {
    const headers = new HttpHeaders({ Accept: 'text/plain' });
    return this.http.post<string>(
      `${environment.apiUrl}/GetCartResponse`,
      { items },
      { headers, responseType: 'text' as const }
    );
  }
}
