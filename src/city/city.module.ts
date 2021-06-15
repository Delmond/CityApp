import { Module } from '@nestjs/common';
import { City, CitySchema } from './schema/city.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  imports: [MongooseModule.forFeature([{name: City.name, schema: CitySchema}])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService]
})
export class CityModule {}
