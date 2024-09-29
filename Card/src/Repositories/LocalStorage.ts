import { Product } from '../Entities/Product';
import { Storable } from '../interfaces/Storable ';

export class LocalStorage implements Storable {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  addItem(item: Product): void {
    const currentData = this.getAllItems();
    currentData.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(currentData));
  }

  removeItem(item: Product): void {
    const currentData = this.getAllItems();
    const updatedData = currentData.filter(i => i !== item);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
  }

  getAllItems(): Product[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
