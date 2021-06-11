import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import { HappeningModule } from './happening/happening.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:1234/cities"), CityModule, HappeningModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
