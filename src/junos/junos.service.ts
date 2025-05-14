import { Injectable } from '@nestjs/common';

import { JunosApiService } from 'src/helper/service/junos-api.service';

@Injectable()
export class JunosService {
  constructor(private readonly junosApiService: JunosApiService) {}

  async chassisInventory() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-chassis-inventory',
      'GET',
    );
  }

  async getBfdSessionInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-bfd-session-information',
      'GET',
    );
  }

  async getLldpNeighborDetailInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-lldp-neighbor-detail-information',
      'GET',
    );
  }

  async getOspfInterfaceInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-ospf-interface-information',
      'GET',
    );
  }

  async getOspfNeighborInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-ospf-neighbor-information',
      'GET',
    );
  }

  async getBgpSummaryInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-bgp-summary-information',
      'GET',
    );
  }

  async getBgpNeighborInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-bgp-neighbor-information',
      'GET',
    );
  }

  async getLdpNeighborInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-ldp-neighbor-information',
      'GET',
    );
  }

  async getLdpInterfaceInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-ldp-interface-information',
      'GET',
    );
  }

  async getMplsInterfaceInformation() {
    return this.junosApiService.callJunosRpc(
      '/rpc/get-mpls-interface-information',
      'GET',
    );
  }
}
