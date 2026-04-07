import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products').then((m) => m.Products),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'checkout/cancel',
    loadComponent: () => import('./checkout/checkout-failure/checkout-failure').then((m) => m.CheckoutFailure),
  },
  {
    path: 'checkout/success',
    loadComponent: () => import('./checkout/checkout-success/checkout-success').then((m) => m.CheckoutSuccess),
  }

];
