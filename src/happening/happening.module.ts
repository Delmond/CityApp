import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HappeningController } from './happening.controller';
import { HappeningService } from './happening.service';
import { Happening, HappeningSchema } from './schema/happening.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Happening.name, schema: HappeningSchema}])],
  controllers: [HappeningController],
  providers: [HappeningService]
})
export class HappeningModule {}
