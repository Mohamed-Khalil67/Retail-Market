import { afterNextRender, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductStore } from '../stores/product.store';
import { CartStore } from '../stores/cart.store';
import { ProductCard } from "../components/product-card/product-card";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productStore = inject(ProductStore);
  cartStore = inject(CartStore);

  constructor() {
    afterNextRender(() => {
      this.productStore.loadProducts();
    });
  }
}
