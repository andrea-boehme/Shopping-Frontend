import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
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




}


