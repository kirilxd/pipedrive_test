import {Body, Controller, Get, Logger, Param, Post, Put} from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDto } from './dto/deal.dto';

@Controller('deals')
export class DealsController {
  private readonly logger = new Logger('DealsService');
  constructor(private dealsService: DealsService) {}

  @Get()
  findAll() {
    this.logger.log("Get deals request accepted")
    return this.dealsService.findAll();
  }

  @Post()
  create(@Body() dealDto: DealDto) {
    this.logger.log("Create deal request accepted")
    return this.dealsService.create(dealDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dealDto: DealDto) {
    this.logger.log("Update deal request accepted")
    return this.dealsService.update(id, dealDto);
  }
}
