import { Schema, Document } from 'mongoose';

export interface DeviceData {
  hostId: string;
  hostName: string;
  ip: string;
  collectedAt: Date;
  metrics: {
    name: string;
    value: string;
    timestamp: Date;
  }[];
}

export type DeviceDataDocument = DeviceData & Document;

export const DeviceDataSchema = new Schema<DeviceDataDocument>({
  hostId: { type: String, required: true },
  hostName: { type: String, required: true },
  ip: { type: String, required: true },
  collectedAt: { type: Date, required: true },
  metrics: [
    {
      name: { type: String, required: true },
      value: { type: String, required: false },
      timestamp: { type: Date, required: true },
    },
  ],
});
