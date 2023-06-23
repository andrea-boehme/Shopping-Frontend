import {user} from "./user";
import {productQuantity} from "./product-quantity";

export interface order {
  id: number;
  user: user;
  paid: boolean;
  shippingState: string;
  date: Date;
  items: productQuantity[];
}

