import { IValidator, IsPositiveNumber, sum, key } from './modules-export';

var isPositive: IValidator = new IsPositiveNumber();

console.log(isPositive.validate(3)); // true
console.log(sum(1, 2)); // 3
console.log(key); // 1a2b3c