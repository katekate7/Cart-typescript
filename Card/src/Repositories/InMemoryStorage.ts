import { Product } from '../Entities/Product';
import { Storable } from '../interfaces/Storable ';

export class InMemoryStorage implements Storable {
  private storage: Product[] = [];

  addItem(item: Product): void {
    this.storage.push(item);
  }

  removeItem(item: Product): void {
    this.storage = this.storage.filter(i => i !== item);
  }

  getAllItems(): Product[] {
    return this.storage;
  }
}
