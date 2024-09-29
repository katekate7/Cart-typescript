import { Product } from './Entities/Product';
import { Cart } from './Cart';
import { InMemoryStorage } from './Repositories/InMemoryStorage';
import { LocalStorage } from './Repositories/LocalStorage';

const apple = new Product("Apple", 2);
const banana = new Product('Banana', 1);
const skirt = new Product('Skirt', 122);

console.log(apple.getPrice());
console.log(apple.getName());
console.log(banana.getPrice());
console.log(banana.getName());
console.log(skirt.getPrice());
console.log(skirt.getName());


const storage = new InMemoryStorage();
// const localStorage = new LocalStorage('cartItems');
const cart = new Cart(storage);

cart.addProduct(apple);
cart.addProduct(banana);
cart.addProduct(skirt);

console.log('Total price:', cart.getTotal());
console.log('Products in cart:', cart.getProducts().map(product => product.getName() + "-" + product.getPrice()));