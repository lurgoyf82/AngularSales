import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:5001/GetCartResponse';

  constructor(private http: HttpClient) { }

  getCartResponse(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}