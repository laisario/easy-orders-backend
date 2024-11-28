import { Order } from 'src/order/order.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { EmployeeCategory } from '../enums/employee.enum';


@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: EmployeeCategory,
        default: EmployeeCategory.Waiter,
    })
    category: EmployeeCategory;


    @ManyToOne(() => Restaurant, (restaurant) => restaurant.employees)
    restaurant: Restaurant;

    @OneToMany(() => Order, (order) => order.employee)
    orders: Order[];
}
