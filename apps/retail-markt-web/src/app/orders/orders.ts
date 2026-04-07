import { Component, inject } from '@angular/core';
import { OrderStore } from '../stores/order.store';
import { RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [RouterLink, DatePipe, DecimalPipe],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  orderStore = inject(OrderStore);
}
