import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './schema/city.schema'
import { ApiParam } from '@nestjs/swagger';


@Controller('city')
export class CityController {
    constructor(private cityService: CityService){}

    @Get('all')
    async getAll(): Promise<City[]> {
        return this.cityService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() city: CreateCityDto): Promise<City> {
        return this.cityService.create(city);
    }

    @ApiParam({ name: 'id', type: 'ObjectId'})
    @Get(':id')
    async getById(@Param('id') id: ObjectId): Promise<City> {
        return this.cityService.findById(id);
    }

}
