import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrdersResolver, OrdersService],
  exports: [OrdersService], // to expose OrdersService to other modules if needed
})
export class OrdersModule {}
