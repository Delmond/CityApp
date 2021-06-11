
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';


export type HappeningDocument = Happening & Document;

@Schema()
export class Happening {

    @Prop({ required: true })
    name: string;

    @Prop({ type: String, ref: 'City', required: true })
    city: ObjectId;

}

export const HappeningSchema = SchemaFactory.createForClass(Happening);