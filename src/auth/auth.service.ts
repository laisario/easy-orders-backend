import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { CreateRestaurantDto } from 'src/restaurant/dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from 'src/restaurant/dtos/update-restaurant.dto';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { AuthResponse } from 'src/auth/interfaces/auth_response.interface'

@Injectable()
export class AuthService {
  constructor(private restaurantService: RestaurantService, private jwtService: JwtService) {}

  async register(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantService.create(createRestaurantDto);
    return restaurant;
  }

  async validateRestaurant(email: string, password: string): Promise<AuthResponse> {
    const restaurant = await this.restaurantService.findByEmail(email);

    if (!restaurant) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, restaurant.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { id: restaurant.id, email: restaurant.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant> {
    const restaurant = await this.restaurantService.update(id, updateRestaurantDto);
    return restaurant
  }

  async remove(id: number): Promise<void> {
    await this.restaurantService.delete(id);
  }
}
