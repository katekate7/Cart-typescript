import { Productable } from '../interfaces/Productable';

export class Product implements Productable {
 
    constructor(private name: string, private price: number){ }

    getPrice(): number {
        return this.price;
    }

    setPrice(newPrice: number): void {
        this.price = newPrice;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }

}