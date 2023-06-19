import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {cartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    let username = 'admin';
    let password = 'adminPassword';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  getProducts(): Observable<cartItem[]> {
    return this.http.get <cartItem[]>("http://localhost:8080/Shopping-Frontend", {headers: this.getHeaders()});
  }
  addProduct(cartItem: cartItem): Observable<cartItem> {
    return this.http.post <cartItem>("http://localhost:8080/Shopping-Frontend", cartItem, {headers: this.getHeaders()});
  }

}
