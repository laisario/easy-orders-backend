import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { TableModule } from './table/table.module';
import { OrderModule } from './order/order.module';
import { Restaurant } from './restaurant/restaurant.entity';
import { Menu } from './menu/menu.entity';
import { Table } from './table/table.entity';
import { Order } from './order/order.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { AuthModule } from './auth/auth.module';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    RestaurantModule,
    MenuModule,
    TableModule,
    OrderModule,
    EmployeeModule,
    AuthModule,
    // TypeOrmModule.forFeature([Menu, Employee, Order, Table, Restaurant]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
