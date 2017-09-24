/*
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. 
This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill 
the role of naming these types, and are a powerful way of defining contracts within your code as 
well as contracts with code outside of your project.
*/

interface Point {
    x: number;
    y: number;
}

const p: Point = { x: 1, y: 2 };

/** Class Types */
interface Shape {
    calculateArea(): number;
    color?: string;
}

class Square implements Shape {
    constructor(private side: number) { }

    calculateArea() {
        return this.side * this.side; 
    }
}

class Circle implements Shape {
    constructor(private radius: number, public color: string) { }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

/**  Function Types
Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. 
In addition to describing an object with properties, interfaces are also capable of describing function types.

To describe a function type with an interface, we give the interface a call signature. 
This is like a function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type. */
interface NumberSorter {
    (collection: number[]): number[];
}

const bubbleSort: NumberSorter = function(collection) {
    const sortedCollection = collection.slice();
    // Sorting logic here...
    return sortedCollection;
}

/** Indexable Types
Indexable types have an index signature that describes the types we can use to index into the object, 
along with the corresponding return types when indexing. Let’s take an example:
*/
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = [ 'Hugo', 'Lisa' ];