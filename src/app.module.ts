import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectorModule } from './collector/collector.module';
import { ZabbixModule } from './zabbix/zabbix.module';
import { JunosModule } from './junos/junos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongodb:69sJyZmENXQd@103.20.144.71:27017/zabbixdb?authSource=admin',
    ),
    CollectorModule,
    ZabbixModule,
    JunosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
