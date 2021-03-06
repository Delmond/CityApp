import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CityService } from 'src/city/city.service';
import { CreateHappeningDto } from './dto/create-happening.dto';
import { Happening, HappeningDocument } from './schema/happening.schema';

@Injectable()
export class HappeningService {
    constructor(@InjectModel(Happening.name) private happeningModel: Model<HappeningDocument>,
                private cityService: CityService) {}

    async create(createHappeningDto: CreateHappeningDto): Promise<Happening> {
        const happening = new this.happeningModel(createHappeningDto);
        return happening.save();
    }

    async findAll(): Promise<Happening[]> {
        return this.happeningModel.find().exec();
    }

    async findById(id: string): Promise<Happening> {
        return this.happeningModel.findById(id).exec();
    }

    async findAllByCityId(id: string): Promise<Happening[]> {
        const city = await this.cityService.findById(id);
        return this.happeningModel.find({ city: city }).exec();
    }

}
