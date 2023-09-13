import {Component, Input, OnInit} from '@angular/core';
import {productQuantity} from "../../models/product-quantity";
import {CartService} from "../cart.service";
import {ProductService} from "../product.service";
import {product} from "../../models/product";
import {cart} from "../../models/cart";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  cart?: cart

  ngOnInit() {
    this.cartService.getCart().subscribe((response) => {
      this.cart = response;
    });
  }

  calculateSum(): number {
    let sum: number = 0;
    for (let i of this.cart!.items) {
      sum += i.product.price * i.quantity;
    }
      return sum;
  }

  closeOrder() {
    this.orderService.addOrder().subscribe((x) => {
      this.router.navigate(['/orders-historie']);
    });
  }

}
