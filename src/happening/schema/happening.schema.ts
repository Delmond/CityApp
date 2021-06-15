
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { City } from 'src/city/schema/city.schema';


export type HappeningDocument = Happening & Document;

@Schema()
export class Happening {

    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'City', required: true })
    city: City;

}

export const HappeningSchema = SchemaFactory.createForClass(Happening);