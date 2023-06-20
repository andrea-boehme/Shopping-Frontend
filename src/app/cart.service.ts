import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {productQuantity} from "../models/product-quantity";
import {product} from "../models/product";
import {cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    let username = 'astein@gmail.com';
    let password = 'steiny';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  productsInCart = [];

  updateCart(product: product, quantity: number) {
    console.log("XXX")
    let productQuantity = {
      product: product,
      quantity: quantity
    }

    return this.http.put<cart> ("http://localhost:8080/cart", productQuantity, {headers: this.getHeaders()});
  }

  // getCarts(): Observable<productQuantity[]> {
  //   return this.http.get <productQuantity[]>("http://localhost:8080/cart", {headers: this.getHeaders()});
  // }
  // addCart(productQuantity: productQuantity): Observable<productQuantity> {
  //   return this.http.post <productQuantity>("http://localhost:8080/Shopping-Frontend", productQuantity, {headers: this.getHeaders()});
  // }

}
