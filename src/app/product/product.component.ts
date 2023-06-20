import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../models/product";
import {ProductService} from "../product.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: product
  quantity: number = 0;
  amount: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  updateCart() {
    this.cartService.updateCart(this.product, this.quantity).subscribe()
  }

  decreaseQuantity() {
    if (this.quantity > 0 ) {
      this.quantity --;
      this.amount = this.quantity * this.product.price;
    }
  }

  increaseQuantity() {
    this.quantity ++;
    this.amount = this.quantity * this.product.price;
  }
}
