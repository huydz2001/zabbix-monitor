import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JunosApiService {
  async callJunosRpc(
    path: string,
    method: 'GET' | 'POST' = 'GET',
    data?: any,
    headers?: Record<string, string>,
  ) {
    const username: string = 'admin';
    const password: string = 'dts@2025';
    const url = `http://10.10.66.246:3000${path}`;
    const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');
    const defaultHeaders = {
      Authorization: `Basic ${basicAuth}`,
      Accept: 'application/json',
      'Content-Type': 'application/xml',
      ...headers,
    };

    const response = await axios.request({
      url,
      method,
      headers: defaultHeaders,
      data,
    });

    return response.data;
  }
}
