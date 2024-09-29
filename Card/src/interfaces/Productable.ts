
export interface Productable{

    getPrice(): number;
    setPrice(price: number): void;

    setName(name: string): void;
    getName(): string;
}