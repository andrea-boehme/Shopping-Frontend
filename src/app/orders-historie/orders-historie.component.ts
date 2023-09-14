import {Component, Input, OnInit} from '@angular/core';
import {cart} from "../../models/cart";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {order} from "../../models/order";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-orders-historie',
  templateUrl: './orders-historie.component.html',
  styleUrls: ['./orders-historie.component.css']
})
export class OrdersHistorieComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private cartService: CartService
  ) {}

  orders: order[] = [];

  ngOnInit() {
    this.getOrders();
    //this.user = this.orderService.getOrders().
  }
  getOrders(): void {
    this.orderService.getOrders().subscribe((resp: any) => {
      this.orders = resp;
    })
  }

  protected readonly name = name;
}
