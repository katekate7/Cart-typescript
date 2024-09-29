import { Product } from './Entities/Product';
import { Storable } from './interfaces/Storable ';

export class Cart {
  constructor(private storage: Storable) {}

  addProduct(product: Product): void {
    this.storage.addItem(product);
  }

  removeProduct(product: Product): void {
    this.storage.removeItem(product);
  }

  getTotal(): number {
    return this.storage.getAllItems().reduce((total, product: Product) => total + product.getPrice(), 0);
  }

  getProducts(): Product[] {
    return this.storage.getAllItems() as Product[];
  }
}
