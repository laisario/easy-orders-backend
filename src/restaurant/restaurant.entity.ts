import { Employee } from 'src/employee/entities/employee.entity';
import { Menu } from 'src/menu/menu.entity';
import { Table } from 'src/table/table.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profilePicture: string | null;

  @Column({ type: 'varchar', length: 7, nullable: true })
  themeColor: string | null;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contactNumber: string | null;

  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  @OneToMany(() => Table, (table) => table.restaurant)
  tables: Table[];

  @OneToMany(() => Employee, (employee) => employee.restaurant)
  employees: Employee[];

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
}
