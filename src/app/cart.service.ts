import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {cartItem} from "../models/cart-item";
import {product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    let username = 'name';
    let password = 'password';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  productsInCart = [];

  updateCart(product: product, quantity: number) {
    let cartItem = {
      product: product,
      quantity: quantity
    }

    return this.http.put ("http://localhost:8080/cart", cartItem, {headers: this.getHeaders()});
  }

  // getCarts(): Observable<cartItem[]> {
  //   return this.http.get <cartItem[]>("http://localhost:8080/cart", {headers: this.getHeaders()});
  // }
  // addCart(cartItem: cartItem): Observable<cartItem> {
  //   return this.http.post <cartItem>("http://localhost:8080/Shopping-Frontend", cartItem, {headers: this.getHeaders()});
  // }

}
