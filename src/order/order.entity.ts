import { Employee } from 'src/employee/entities/employee.entity';
import { Menu } from 'src/menu/menu.entity';
import { Table } from 'src/table/table.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'decimal', nullable: true })
    total: number;

    @ManyToOne(() => Table, (table) => table.orders)
    table: Table;

    @ManyToMany(() => Menu)
    @JoinTable()
    items: Menu[];

    @ManyToOne(() => Employee, (employee) => employee.orders)
    employee: Employee;
}
