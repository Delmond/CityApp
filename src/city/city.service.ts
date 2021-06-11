import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { City, CityDocument } from './schema/city.schema';
import { CreateCityDto } from './dto/create-city.dto'

@Injectable()
export class CityService {

    constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

    async create(createCityDto: CreateCityDto): Promise<CityDocument> {
        const city = new this.cityModel(createCityDto);
        return city.save();
    }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();
    }

    async findById(id: ObjectId): Promise<City> {
        return this.cityModel.findById(id).exec();
    }

    async findByName(name: string): Promise<City> {
        return this.cityModel.findOne({ name: name }).exec();
    }
}
