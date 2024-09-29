import { Product } from "../Entities/Product";

export interface Storable {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    getAllItems(): Product[];
}
  