import {user} from "./user";
import {productQuantity} from "./product-quantity";

export interface cart {
  id: number;
  user: user;
  items: productQuantity[];
}

