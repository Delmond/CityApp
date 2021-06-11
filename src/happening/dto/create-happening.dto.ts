import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { ObjectId } from "mongoose";


export class CreateHappeningDto {


    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    latitude: ObjectId;

}