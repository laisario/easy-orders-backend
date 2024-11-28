import { IOrder } from "src/order/interfaces/order.interface";
import { IRestaurant } from "src/restaurant/interfaces/restaurant.interface";

export interface ITable {
    id: number;
    tableNumber: string;
    restaurant: IRestaurant;
    orders: IOrder[];
    qrcodeUrl: string;
  }