import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../models/product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: product
  @Input() quantity: number = 0;
  @Input() hide: boolean = false;

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
    }
  }

  increaseQuantity() {
    this.quantity ++;
  }


}
