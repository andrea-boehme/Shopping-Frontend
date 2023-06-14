import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {cartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://api.example.com/cart';

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<cartItem[]> {
    return this.http.get<cartItem[]>(this.apiUrl);
  }

  checkout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/checkout`, {});
  }
}
