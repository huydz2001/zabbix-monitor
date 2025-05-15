import { Module } from '@nestjs/common';
import { JunosApiService } from 'src/helper/service/junos-api.service';
import { JunosController } from './junos.controller';
import { JunosService } from './junos.service';
import { JunosExportFileController } from './junos-export-file.controller';
@Module({
  imports: [],
  controllers: [JunosController, JunosExportFileController],
  providers: [JunosService, JunosApiService],
  exports: [JunosService],
})
export class JunosModule {}
