import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateHappeningDto } from './dto/create-happening.dto';
import { HappeningService } from './happening.service';
import { Happening } from './schema/happening.schema';

@Controller('happening')
export class HappeningController {
    constructor(private happeningService: HappeningService){}

    @Get('all')
    async getAll(): Promise<Happening[]> {
        return this.happeningService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() city: CreateHappeningDto): Promise<Happening> {
        return this.happeningService.create(city);
    }

    @ApiProperty({ name: 'id', type: 'ObjectId'})
    @Get(':id')
    async getById(@Param('id') id: ObjectId): Promise<Happening> {
        return this.happeningService.findById(id);
    }

    @ApiProperty({ name: 'id', type: 'ObjectId'})
    @Get('city/:id')
    async getAllByCityId(@Param('id') id: ObjectId): Promise<Happening[]> {
        return this.happeningService.findAllByCityId(id);
    }

}
