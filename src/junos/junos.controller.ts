import { Controller, Get } from '@nestjs/common';
import { JunosService } from './junos.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Junos')
@Controller('junos')
export class JunosController {
  constructor(private readonly junosService: JunosService) {}

  @Get('/chassis-inventory')
  async chassisInventory() {
    return await this.junosService.chassisInventory();
  }

  @Get('/bfd-session-information')
  async getBfdSessionInformation() {
    return await this.junosService.getBfdSessionInformation();
  }

  @Get('/lldp-neighbor-detail-information')
  async getLldpNeighborDetailInformation() {
    return await this.junosService.getLldpNeighborDetailInformation();
  }

  @Get('/ospf-interface-information')
  async getOspfInterfaceInformation() {
    return await this.junosService.getOspfInterfaceInformation();
  }

  @Get('/ospf-neighbor-information')
  async getOspfNeighborInformation() {
    return await this.junosService.getOspfNeighborInformation();
  }

  @Get('/bgp-summary-information')
  async getBgpSummaryInformation() {
    return await this.junosService.getBgpSummaryInformation();
  }

  @Get('/bgp-neighbor-information')
  async getBgpNeighborInformation() {
    return await this.junosService.getBgpNeighborInformation();
  }

  @Get('/ldp-neighbor-information')
  async getLdpNeighborInformation() {
    return await this.junosService.getLdpNeighborInformation();
  }

  @Get('/ldp-interface-information')
  async getLdpInterfaceInformation() {
    return await this.junosService.getLdpInterfaceInformation();
  }

  @ApiOperation({ summary: 'Tùy version Junos mới mới có' })
  @Get('/mpls-interface-information')
  async getMplsInterfaceInformation() {
    return await this.junosService.getMplsInterfaceInformation();
  }
}
