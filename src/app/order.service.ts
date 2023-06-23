import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

  getOrders(): Observable<order[]> {
    return this.http.get <order[]>("http://localhost:8080/order", {headers: this.getHeaders()});
  }
  addOrder(): Observable<order> {
    return this.http.post <order>("http://localhost:8080/order",{}, {headers: this.getHeaders()});
  }

}
