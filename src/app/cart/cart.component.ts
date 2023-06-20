import { Component, OnInit } from '@angular/core';
import {productQuantity} from "../../models/product-quantity";
import {CartService} from "../cart.service";
import {ProductService} from "../product.service";
import {product} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }


  cartItems: productQuantity[] = [];

  ngOnInit() {
    //this.getCartItems();
  }
  // getCarts(): void {
  //   this.cartService.getCartItems().subscribe((resp: any) => {
  //     this.cartItems = resp;
  //   })
  // }



}
