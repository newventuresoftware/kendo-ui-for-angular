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

class Matrix implements IEquatable<Matrix> {
    constructor(private grid: number[][]) { }

    get Rows(): number { return this.grid.length; }
    get Cols(): number { return this.grid[0].length; }

    valueAt(row: number, col: number): number {
        return this.grid[row][col];
    }

    equals(other: Matrix): boolean {
        if(!(this.Rows === other.Rows && this.Cols === other.Cols)) {
            return false;
        }

        for(let row = 0; row < this.Rows; row++) {
            for(let col = 0; col < this.Cols; col++) {
                if(this.valueAt(row, col) !== other.valueAt(row, col)) {
                    return false;
                }
            }
        }

        return true;
    }
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