import {Component, Input, OnInit} from '@angular/core';
import {productQuantity} from "../../models/product-quantity";
import {CartService} from "../cart.service";
import {ProductService} from "../product.service";
import {product} from "../../models/product";
import {cart} from "../../models/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product!: product
  @Input() quantity: number = 0;

  products: product[] = [];

  cart?: cart

  ngOnInit() {
    this.cartService.getCart().subscribe((response) => {
      this.cart = response;
    });
  }

  updateCart() {
    this.cartService.updateCart(this.product, this.quantity).subscribe()
  }

  decreaseQuantity() {
    if (this.quantity > 0 ) {
      this.quantity --;
    }
  }

  increaseQuantity() {
    this.quantity ++;
  }

}
