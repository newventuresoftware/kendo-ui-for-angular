// Template Strings
const city = 'Paris';
console.log(`Welcome to ${city}! Enjoy your stay.`)

// Object Destructiong
const obj = { a: 1, b: true, c: 'c' };
const { a, b } = obj;
console.log(a, b); // 1, true

// Array Destructing
const [x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(x, y, rest); // 10, 20, [30, 40, 50]

// Default Values
function logMessage(message: string = 'Hello World') {
    console.log(message);
}

logMessage('TypeScript Rocks!'); // 'TypeScript Rocks!'
logMessage(); // 'Hello World'

// Arrow Functions
const isEven = (n: number): boolean => {
    return n % 2 === 0;
};

console.log(isEven(2)); // true

const squares = [1, 2, 3, 4, 5].map(x => x * x);
console.log(squares); // [1, 4, 9, 16, 25]

// async, await
function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`Slept for ${timeout / 1000} seconds.`);
        resolve();
    }, timeout));
}

async function asyncFn() {
    await sleep(2000);
    console.log('Should print after sleep fn call.');
}

asyncFn();