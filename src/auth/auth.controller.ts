import { Controller, Post, Body, Patch, Param, Delete, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Public } from "./public-strategy";
import { CreateRestaurantDto } from 'src/restaurant/dtos/create-restaurant.dto';

@Controller('auth')
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "User register" })
  @ApiResponse({
    status: 200,
    description: "The restaurant created",
    type: [CreateRestaurantDto],
  })
  @Post('register')
  async register(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.authService.register(createRestaurantDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: "User Login" })
  @ApiResponse({
    status: 200,
    description: "The restaurant found",
    type: [CreateRestaurantDto],
  })
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.validateRestaurant(email, password);
  }

}
