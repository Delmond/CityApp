import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';


export class CreateCityDto {

    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty()
    latitude: number;

    @IsNumber()
    @ApiProperty()
    longitude: number;
}