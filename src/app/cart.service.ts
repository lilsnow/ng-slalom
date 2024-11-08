import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [
    {
      id: 168,
      title: 'Charger SXT RWD',
      price: 32999.99,
      quantity: 1,
      total: 32999.99,
      discountPercentage: 0,
      discountedTotal: 0,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png',
    },
    {
      id: 78,
      title: 'Apple MacBook Pro 14 Inch Space Grey',
      price: 1999.99,
      quantity: 1,
      total: 1999.99,
      discountPercentage: 0,
      discountedTotal: 0,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png',
    },
    {
      id: 183,
      title: 'Green Oval Earring',
      price: 24.99,
      quantity: 1,
      total: 24.99,
      discountPercentage: 0,
      discountedTotal: 0,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png',
    },
    {
      id: 100,
      title: 'Apple Airpods',
      price: 129.99,
      quantity: 1,
      total: 129.99,
      discountPercentage: 0,
      discountedTotal: 0,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png',
    },
  ];

  private cart: Cart = {
    id: 1,
    products: [
      {
        id: 168,
        title: 'Charger SXT RWD',
        price: 32999.99,
        quantity: 3,
        total: 98999.97,
        discountPercentage: 13.39,
        discountedTotal: 85743.87,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png',
      },
      {
        id: 78,
        title: 'Apple MacBook Pro 14 Inch Space Grey',
        price: 1999.99,
        quantity: 2,
        total: 3999.98,
        discountPercentage: 18.52,
        discountedTotal: 3259.18,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png',
      },
      {
        id: 183,
        title: 'Green Oval Earring',
        price: 24.99,
        quantity: 5,
        total: 124.95,
        discountPercentage: 6.28,
        discountedTotal: 117.1,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png',
      },
      {
        id: 100,
        title: 'Apple Airpods',
        price: 129.99,
        quantity: 5,
        total: 649.95,
        discountPercentage: 12.84,
        discountedTotal: 566.5,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png',
      },
    ],
    total: 103774.85,
    discountedTotal: 89686.65,
    userId: 33,
    totalProducts: 4,
    totalQuantity: 15,
  };

  private cartSubject = new BehaviorSubject<Cart>(this.cart);

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    throw new Error('Method not implemented.');
  }

  removeOne(product: Product) {
    throw new Error('Method not implemented.');
  }

  updateCart(cart: Cart) {
    throw new Error('Method not implemented.');
  }

  updateDiscount(product: Product) {
    throw new Error('Method not implemented.');
  }

  clearCart() {
    this.cart = {
      id: 1,
      products: [],
      total: 0,
      discountedTotal: 0,
      userId: 1,
      totalProducts: 0,
      totalQuantity: 0,
    };
    this.cartSubject.next(this.cart);
  }

  checkout() {
    console.log(JSON.stringify(this.cart, null, 2));
  }
}
