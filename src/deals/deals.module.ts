import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
      baseURL: "https://api.pipedrive.com/v1",
  })],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
