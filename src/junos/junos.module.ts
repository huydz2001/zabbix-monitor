import { Module } from '@nestjs/common';
import { JunosApiService } from 'src/helper/service/junos-api.service';
import { JunosController } from './junos.controller';
import { JunosService } from './junos.service';

@Module({
  imports: [],
  controllers: [JunosController],
  providers: [JunosService, JunosApiService],
  exports: [JunosService],
})
export class JunosModule {}
