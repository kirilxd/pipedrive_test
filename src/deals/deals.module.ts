import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
      baseURL: "https://api.pipedrive.com/v1",
      headers: { Authorization: `Bearer a3f67d1b3c02090ad291180a4f296dcde9e42cc0` }
  })],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
