/* Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, 
but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where
classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015, also
known as ECMAScript 6, JavaScript programmers will be able to build their applications using this object-oriented 
class-based approach. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript
that works across all major browsers and platforms, without having to wait for the next version of JavaScript. */

/*
- syntax, 
- inheritence, 
- access modifiers(private, protected, readonly), 
- property shorthand, 
- getters & setters
- static members */

/* abstract */ class Person {
    readonly /* private protected */ name: string;

    constructor(name: string) { 
        this.name = name; 
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        // this.department = department;
        this.Department = department;
    }

    get Department(): string {
        return this.department;
    }

    set Department(val: string) { 
        this.department = val;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

class MyMath {
    static sum(): number { return 4; }
}

const howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
console.log(howard.Department);
