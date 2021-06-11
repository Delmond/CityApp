import { Test, TestingModule } from '@nestjs/testing';
import { HappeningController } from './happening.controller';

describe('HappeningController', () => {
  let controller: HappeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HappeningController],
    }).compile();

    controller = module.get<HappeningController>(HappeningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
