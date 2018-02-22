interface IValidator {
    validate(value: any): boolean;
}

export class IsPositiveNumber implements IValidator {
    validate(value: number) {
        return value > 0;
    }
}

export let key = '1234';