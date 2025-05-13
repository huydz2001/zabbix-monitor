import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZabbixService {
  private apiUrl = 'http://10.10.88.26/zabbix/api_jsonrpc.php';
  private username = 'Admin';
  private password = 'zabbix';
  private authToken: string | null = null;

  async login() {
    try {
      const res = await axios.post(this.apiUrl, {
        jsonrpc: '2.0',
        method: 'user.login',
        params: { username: this.username, password: this.password },
        id: 1,
      });

      if (res.data.error) {
        throw new Error(res.data.error.message);
      }
      this.authToken = res.data.result!;
      return this.authToken;
    } catch (error) {
      throw new Error(
        'Login failed: ' +
          (error instanceof Error ? error.message : String(error)),
      );
    }
  }

  async getHosts() {
    if (!this.authToken) {
      this.authToken = await this.login();
    }

    try {
      const res = await axios.post(
        this.apiUrl,
        {
          jsonrpc: '2.0',
          method: 'host.get',
          params: {
            output: ['hostid', 'host', 'name'],
            selectInterfaces: ['ip'],
            filter: {
              host: ['EX3400-24T', 'EX3400-48T'],
            },
          },
          id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        },
      );

      if (res.data.error) {
        throw new Error(res.data.error.message);
      }
      return res.data.result!;
    } catch (error) {
      throw new Error(
        'Get hosts failed: ' +
          (error instanceof Error ? error.message : String(error)),
      );
    }
  }

  async getItems(hostid: string) {
    if (!this.authToken) {
      this.authToken = await this.login();
    }
    try {
      const res = await axios.post(
        this.apiUrl,
        {
          jsonrpc: '2.0',
          method: 'item.get',
          params: {
            hostids: hostid,
            output: ['itemid', 'name', 'lastvalue', 'lastclock'],
          },
          id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        },
      );
      if (res.data.error) {
        throw new Error(res.data.error.message);
      }
      return res.data.result!;
    } catch (error) {
      throw new Error(
        'Get items failed: ' +
          (error instanceof Error ? error.message : String(error)),
      );
    }
  }
}
