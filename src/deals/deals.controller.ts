import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDto } from './dto/deal.dto';

@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Post()
  create(@Body() dealDto: DealDto) {
    return this.dealsService.create(dealDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dealDto: DealDto) {
    return this.dealsService.update(id, dealDto);
  }
}
