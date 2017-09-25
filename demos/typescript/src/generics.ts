class Matrix {
    constructor(private grid: number[][]) { }

    get Rows(): number { return this.grid.length; }
    get Cols(): number { return this.grid[0].length; }

    valueAt(row: number, col: number): number {
        return this.grid[row][col];
    }
}

class Car {
    constructor(public model: string, public productionYear: number) { }
}