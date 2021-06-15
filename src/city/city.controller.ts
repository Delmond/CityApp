import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { Types } from 'mongoose';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './schema/city.schema'
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('city')
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

    @ApiParam({ name: 'id', type: String})
    @Get(':id')
    async getById(@Param('id') id: string): Promise<City> {
        return this.cityService.findById(id);
    }

}
