import { DataSource } from 'typeorm';
import { Restaurant } from './restaurant/restaurant.entity';
import { Menu } from './menu/menu.entity';
import { Table } from './table/table.entity';
import { Order } from './order/order.entity';
import { Employee } from './employee/entities/employee.entity';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [Restaurant, Menu, Table, Order, Employee],
    migrations: ['src/migrations/*.ts'],
});