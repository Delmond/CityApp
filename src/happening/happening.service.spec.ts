import { Test, TestingModule } from '@nestjs/testing';
import { HappeningService } from './happening.service';

describe('HappeningService', () => {
  let service: HappeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HappeningService],
    }).compile();

    service = module.get<HappeningService>(HappeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
