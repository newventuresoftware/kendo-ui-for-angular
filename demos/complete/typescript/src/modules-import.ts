import { IValidator, NumberValidator, sum, key } from './modules-export';

var validator: IValidator = new NumberValidator();

console.log(validator.validate(3)); // true
console.log(sum(1, 2)); // 3
console.log(key); // 1a2b3c