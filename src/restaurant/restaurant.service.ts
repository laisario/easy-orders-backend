import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) { }

  async findAll(): Promise<IRestaurant[]> {
    return await this.restaurantRepository.find();
  }

  async findById(id: number): Promise<IRestaurant> {
    const restaurant = await this.restaurantRepository.findOne({ where: { id } });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return restaurant;
  }

  async findByEmail(email: string): Promise<IRestaurant> {
    const restaurant = await this.restaurantRepository.findOne({ where: { email } });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with email ${email} not found`);
    }
    return restaurant;
  }

  async create(createRestaurantDto: CreateRestaurantDto): Promise<IRestaurant> {
    const restaurant = this.restaurantRepository.create({
      ...createRestaurantDto,
      createdAt: new Date()
    });
    return await this.restaurantRepository.save(restaurant);
  }

  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<IRestaurant> {
    const restaurant = await this.findById(id);
    const updatedRestaurant = Object.assign(restaurant, {...updateRestaurantDto, updatedAt: new Date()});
    return await this.restaurantRepository.save(updatedRestaurant);
  }

  async delete(id: number): Promise<void> {
    const result = await this.restaurantRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
  }
}
