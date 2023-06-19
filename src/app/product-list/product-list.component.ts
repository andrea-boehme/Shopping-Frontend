import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  products: product[] = [];

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().subscribe((resp: any) => {
      this.products = resp;
    })
  }

  addToCart(i: number) {
    if (this.productService.productsInCart.includes(this.productService.products[i])) {
      let indexOfProduct = this.productService.productsInCart.indexOf(this.productService.products[i])
      this.productService.productsInCart[indexOfProduct]['amount']++;
    } else {
      this.productService.productsInCart.push(this.productService.products[i]);

    }
  }
}


