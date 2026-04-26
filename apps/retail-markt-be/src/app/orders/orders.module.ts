import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  imports: [PrismaModule, FirebaseModule],
  providers: [OrdersResolver, OrdersService],
  exports: [OrdersService], // to expose OrdersService to other modules if needed
})
export class OrdersModule {}
