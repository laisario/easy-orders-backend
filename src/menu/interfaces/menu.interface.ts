import { IRestaurant } from "src/restaurant/interfaces/restaurant.interface";
import { MenuCategory } from "../enums/menu.enum";

export interface IMenu {
    id: number;
    name: string;
    price: number;
    restaurantId: number;
    description: string;
    category: MenuCategory;
    restaurant: IRestaurant;
  }