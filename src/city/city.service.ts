import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { City, CityDocument } from './schema/city.schema';
import { CreateCityDto } from './dto/create-city.dto'
import { NameAlreadyExistsException } from './exception/name-already-exists.exception';

@Injectable()
export class CityService {

    constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

    async create(createCityDto: CreateCityDto): Promise<CityDocument> {
        const city = new this.cityModel(createCityDto);
        try {
            return await city.save();
        } catch (error){
            throw new NameAlreadyExistsException();
        }
    }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();
    }

    async findById(id: string): Promise<City> {
        return this.cityModel.findById(id).exec();
    }

    async findByName(name: string): Promise<City> {
        return this.cityModel.findOne({ name: name }).exec();
    }
}
