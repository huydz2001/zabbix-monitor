import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceDataController } from 'src/collector/controller/device-collector.controller';
import { DeviceDataService } from 'src/collector/service/device-collector.service';
import { CollectorService } from 'src/collector/service/collector.service';
import { ZabbixService } from 'src/zabbix/service/zabbix.service';
import { DeviceDataSchema } from './schema/device.schema';
import { CollectorController } from './controller/collector.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DeviceData', schema: DeviceDataSchema },
    ]),
  ],
  controllers: [DeviceDataController, CollectorController],
  providers: [CollectorService, ZabbixService, DeviceDataService],
})
export class CollectorModule {}
