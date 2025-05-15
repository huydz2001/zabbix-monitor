import { Controller, Get, Res } from '@nestjs/common';
import { JunosService } from './junos.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Junos Export File')
@Controller('junos-export-file')
export class JunosExportFileController {
  constructor(private readonly junosService: JunosService) {}

  @Get('/export/chassis-inventory')
  async exportChassisInventory(@Res() res: Response) {
    const data = await this.junosService.chassisInventory();
    res.header('Content-Type', 'application/json');
    res.attachment('chassis-inventory.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/bfd-session-information')
  async exportBfdSessionInformation(@Res() res: Response) {
    const data = await this.junosService.getBfdSessionInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('bfd-session-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/lldp-neighbor-detail-information')
  async exportLldpNeighborDetailInformation(@Res() res: Response) {
    const data = await this.junosService.getLldpNeighborDetailInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('lldp-neighbor-detail-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/ospf-interface-information')
  async exportOspfInterfaceInformation(@Res() res: Response) {
    const data = await this.junosService.getOspfInterfaceInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('ospf-interface-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/ospf-neighbor-information')
  async exportOspfNeighborInformation(@Res() res: Response) {
    const data = await this.junosService.getOspfNeighborInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('ospf-neighbor-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/bgp-summary-information')
  async exportBgpSummaryInformation(@Res() res: Response) {
    const data = await this.junosService.getBgpSummaryInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('bgp-summary-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/bgp-neighbor-information')
  async exportBgpNeighborInformation(@Res() res: Response) {
    const data = await this.junosService.getBgpNeighborInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('bgp-neighbor-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/ldp-neighbor-information')
  async exportLdpNeighborInformation(@Res() res: Response) {
    const data = await this.junosService.getLdpNeighborInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('ldp-neighbor-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @Get('/export/ldp-interface-information')
  async exportLdpInterfaceInformation(@Res() res: Response) {
    const data = await this.junosService.getLdpInterfaceInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('ldp-interface-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }

  @ApiOperation({ summary: 'Tùy version Junos mới mới có' })
  @Get('/export/mpls-interface-information')
  async exportMplsInterfaceInformation(@Res() res: Response) {
    const data = await this.junosService.getMplsInterfaceInformation();
    res.header('Content-Type', 'application/json');
    res.attachment('mpls-interface-information.json');
    return res.send(JSON.stringify(data, null, 2));
  }
}
