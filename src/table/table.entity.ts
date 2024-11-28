import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Order } from 'src/order/order.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  tableNumber: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.tables)
  restaurant: Restaurant;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];

  @Column({ unique: true })
  qrcodeUrl: string;
}
