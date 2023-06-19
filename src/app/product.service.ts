import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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


  getProducts(): Observable<product[]> {
    return this.http.get <product[]>("http://localhost:8080/product", {headers: this.getHeaders()});
  }
  addProduct(product: product): Observable<product> {
    return this.http.post <product>("http://localhost:8080/product", product, {headers: this.getHeaders()});
  }
}
