import { Controller, Get } from '@nestjs/common';
import { CollectorService } from '../service/collector.service';

@Controller('collector')
export class CollectorController {
  constructor(private readonly collectorService: CollectorService) {}

  @Get()
  async collectAllData() {
    return await this.collectorService.collectAll();
  }
}
