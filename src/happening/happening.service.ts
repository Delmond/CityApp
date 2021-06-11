import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateHappeningDto } from './dto/create-happening.dto';
import { Happening, HappeningDocument } from './schema/happening.schema';

@Injectable()
export class HappeningService {
    constructor(@InjectModel(Happening.name) private happeningModel: Model<HappeningDocument>) {}

    async create(createHappeningDto: CreateHappeningDto): Promise<Happening> {
        const happening = new this.happeningModel(createHappeningDto);
        return happening.save();
    }

    async findAll(): Promise<Happening[]> {
        return this.happeningModel.find().exec();
    }

    async findById(id: ObjectId): Promise<Happening> {
        return this.happeningModel.findById(id).exec();
    }

    async findAllByCityId(id: ObjectId): Promise<Happening[]> {
        return this.happeningModel.find({ city: id }).exec();
    }

}
