import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsModule } from './deals/deals.module';
import { ConfigModule } from '@nestjs/config';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [ConfigModule.forRoot(), DealsModule, PrometheusModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
