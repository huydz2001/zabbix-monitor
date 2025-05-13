import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeviceDataDocument } from 'src/collector/schema/device.schema';

@Injectable()
export class DeviceDataService {
  constructor(
    @InjectModel('DeviceData') private dataModel: Model<DeviceDataDocument>,
  ) {}

  async findAll() {
    return this.dataModel.find().exec();
  }

  async findByHostId(hostId: string) {
    return this.dataModel.findOne({ hostId }).exec();
  }
}
