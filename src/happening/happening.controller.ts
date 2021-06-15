import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ObjectId, Types } from 'mongoose';
import { CreateHappeningDto } from './dto/create-happening.dto';
import { HappeningService } from './happening.service';
import { Happening } from './schema/happening.schema';

@ApiTags('happening')
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

    @ApiParam({ name: 'id', type: String})
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Happening> {
        return this.happeningService.findById(id);
    }

    @ApiParam({ name: 'id', type: String})
    @Get('city/:id')
    async getAllByCityId(@Param('id') id: string): Promise<Happening[]> {
        return this.happeningService.findAllByCityId(id);
    }

}
