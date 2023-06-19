import { Component, OnInit } from '@angular/core';
import {cartItem} from "../../models/cart-item";
import {CartService} from "../cart.service";
import {ProductService} from "../product.service";
import {product} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //cartItems: cartItem[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
   // this.cartService.getCartItems().subscribe((t => {this.cartItems = t}));
  }

  protected cartItems: cartItem[] = [];

}
