import { IEmployee } from "src/employee/interfaces/employee.interface";
import { IMenu } from "src/menu/interfaces/menu.interface";
import { ITable } from "src/table/interfaces/table.interface";

export interface IOrder {
    id: number;
    createdAt: Date;
    total: number;
    table: ITable;
    items: IMenu[];
    employee: IEmployee;
  }