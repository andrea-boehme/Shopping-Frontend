import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {OrdersHistorieComponent} from "./orders-historie/orders-historie.component";


const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders-historie', component: OrdersHistorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
