import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {cartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  productsInCart = [];

  addToCart() {
    return this.http.post <cartItem>("http://localhost:8080/cart", cartItem, {headers: this.getHeaders()});
  }

  // getCarts(): Observable<cartItem[]> {
  //   return this.http.get <cartItem[]>("http://localhost:8080/cart", {headers: this.getHeaders()});
  // }
  // addCart(cartItem: cartItem): Observable<cartItem> {
  //   return this.http.post <cartItem>("http://localhost:8080/Shopping-Frontend", cartItem, {headers: this.getHeaders()});
  // }

}
