import { IEmployee } from "src/employee/interfaces/employee.interface";
import { IMenu } from "src/menu/interfaces/menu.interface";
import { ITable } from "src/table/interfaces/table.interface";

export interface IRestaurant {
    id: number;
    name: string;
    profilePicture: string;
    themeColor: string;
    isActive: boolean;
    address: string;
    contactNumber: string;
    email: string;
    password: string;
    menus: IMenu[],
    tables: ITable[],
    employees: IEmployee[],
    createdAt: Date,
    updatedAt: Date,
}