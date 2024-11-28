import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MenuCategory } from './enums/menu.enum';


@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({type: 'decimal'})
  price: number;

  @Column({ type: "int" })
  restaurantId: number;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: MenuCategory,
    default: MenuCategory.Food,
  })
  category: MenuCategory;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;
}
