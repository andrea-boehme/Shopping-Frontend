import { Component, OnInit } from '@angular/core';
import {cartItem} from "../../models/cart-item";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  checkout() {
    this.cartService.checkout().subscribe(() => {
      // Handle successful checkout, e.g., show confirmation message
    });
  }

}
