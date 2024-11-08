import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Cart, CartService, Product } from "../cart.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-shopping-cart",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart = {
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    id: 0,
    userId: 1,
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  deleteItem(item: Product) {
    this.cartService.removeOne(item);
  }

  updateDiscount(item: Product) {
    this.cartService.updateDiscount(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkout() {
    this.cartService.checkout();
  }
}
