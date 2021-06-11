import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CityDocument = City & Document;

@Schema()
export class City {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    latitude: number;

    @Prop({ required: true })
    longitude: number;

}

export const CitySchema = SchemaFactory.createForClass(City);