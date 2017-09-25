interface IValidator {
    validate(value: any): boolean;
}

class NumberValidator implements IValidator {
    validate(value: number) {
        return !isNaN(value) && isFinite(value);
    }
}