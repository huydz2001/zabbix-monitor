import { Controller, Get, Param } from '@nestjs/common';
import { DeviceDataService } from 'src/collector/service/device-collector.service';

@Controller('device-data')
export class DeviceDataController {
  constructor(private readonly deviceDataService: DeviceDataService) {}

  // Lấy tất cả dữ liệu từ các thiết bị
  @Get()
  async getAllDeviceData() {
    return await this.deviceDataService.findAll();
  }

  // Lấy dữ liệu của thiết bị theo hostId
  @Get(':hostId')
  async getDeviceDataByHostId(@Param('hostId') hostId: string) {
    return await this.deviceDataService.findByHostId(hostId);
  }
}
