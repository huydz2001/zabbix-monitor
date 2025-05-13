import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ZabbixService } from 'src/zabbix/service/zabbix.service';
import { DeviceDataSchema } from 'src/collector/schema/device.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DeviceData', schema: DeviceDataSchema },
    ]),
  ],
  controllers: [],
  providers: [ZabbixService],
  exports: [ZabbixService],
})
export class ZabbixModule {}
