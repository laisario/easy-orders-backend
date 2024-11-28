import { IRestaurant } from "src/restaurant/interfaces/restaurant.interface";
import { EmployeeCategory } from "../enums/employee.enum";
import { IOrder } from "src/order/interfaces/order.interface";

export interface IEmployee {
    id: number;
    name: string;
    category: EmployeeCategory;
    restaurant: IRestaurant;
    orders: IOrder[];
  }