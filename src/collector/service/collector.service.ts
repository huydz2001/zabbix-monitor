import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ZabbixService } from 'src/zabbix/service/zabbix.service';
import { DeviceDataDocument } from 'src/collector/schema/device.schema';

@Injectable()
export class CollectorService {
  constructor(
    private readonly zabbixService: ZabbixService,
    @InjectModel('DeviceData') private dataModel: Model<DeviceDataDocument>,
  ) {}

  async collectAll() {
    const hosts = await this.zabbixService.getHosts();

    // Lặp qua từng host (switch)
    for (const host of hosts) {
      const items = await this.zabbixService.getItems(host.hostid);
      // Lưu dữ liệu vào MongoDB
      await this.dataModel.create({
        hostId: host.hostid,
        hostName: host.name,
        ip: host.interfaces[0]?.ip,
        collectedAt: new Date(),
        metrics: items.slice(0, 10).map((item) => {
          return {
            name: item.name,
            value: item?.lastvalue.trim() ?? '0',
            timestamp: new Date(parseInt(item.lastclock) * 1000),
          };
        }),
      });
    }
  }
}
