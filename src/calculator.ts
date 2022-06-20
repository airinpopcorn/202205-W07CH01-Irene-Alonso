export function calculator(a: number, b: number) {
    const sum = a + b;
    const rest = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [
        {
            name: sum,
        },
        {
            name: rest,
        },
        {
            name: multiply,
        },
        {
            name: divide,
        },
    ];
}
