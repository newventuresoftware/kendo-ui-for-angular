/*
A major part of software engineering is building components that not only have well-defined and 
consistent APIs, but are also reusable.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable 
components is generics, that is, being able to create a component that can work over a variety 
of types rather than a single one. This allows users to consume these components and use their own types.
*/
interface IEquatable<T>
{
    equals(other: T): boolean;
}

class Car implements IEquatable<Car> {
    constructor(public model: string, public productionYear: number) { }

    equals(other: Car): boolean {
        return (this.model === other.model) && (this.productionYear === other.productionYear);
    }
}

function sequenceEquals<T>(first: IEquatable<T>[], second: T[]) {
    if(first.length !== second.length) {
        return false;
    }

    for(let i = 0; i < first.length; i++) {
        if(!first[i].equals(second[i])) {
            return false;
        }
    }

    return true;
}

const garageA = [new Car('BMW 430', 2017), new Car('Audi A8', 2016)];
const garageB = [new Car('BMW 430', 2017), garageA[1]];

console.log(sequenceEquals(garageA, garageB));

class Stack<T> {
    data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T {
        return this.data.pop();
    }

    peek(): T {
        if(this.data.length)
            return this.data[this.data.length - 1];

        return null;
    }

    size() {
        return this.data.length;
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());