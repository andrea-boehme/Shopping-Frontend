import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: product
  quantity: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart(product: product) {
    // if (this.cartService.productsInCart.includes(this.productService.products[i])) {
    //   let indexOfProduct = this.productService.productsInCart.indexOf(this.productService.products[i])
    //   this.productService.productsInCart[indexOfProduct]['amount']++;
    // } else {
    //   this.productService.productsInCart.push(this.productService.products[i]);
    //
    // }

  }

  removeFromCart(product: product) {

  }
}
