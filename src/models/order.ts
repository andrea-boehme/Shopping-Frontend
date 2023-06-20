import {user} from "./user";

export interface order {
  id: number;
  user: user;
  paid: boolean;
  shippingState: string;
  date: string;
}

