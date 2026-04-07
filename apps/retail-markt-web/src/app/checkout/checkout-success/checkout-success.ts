import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderStore } from '../../stores/order.store';
import { OrderDetail } from '../../orders/order-detail/order-detail';
import { CartStore } from '../../stores/cart.store';

@Component({
  selector: 'app-checkout-success',
  imports: [RouterLink, OrderDetail],
  templateUrl: './checkout-success.html',
  styleUrl: './checkout-success.scss',
})
export class CheckoutSuccess implements OnInit {
  orderStore = inject(OrderStore);
  route = inject(ActivatedRoute);
  cartStore = inject(CartStore);

  constructor() {
    afterNextRender(() => {
      this.cartStore.clearCart();
    })}

  ngOnInit() {
    const orderId = this.route.snapshot.queryParamMap.get('orderId');
    if (!orderId) {
      this.orderStore.setError('Order ID is missing');
      return;
    }
    this.orderStore.getOrder(orderId).subscribe();
  }
}
