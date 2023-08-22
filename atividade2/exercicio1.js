var num1 = 4, num2 = 2, op;

function calculadora(num1, num2, op ) {
    switch (op) {
        case '+':
            console.log(`${num1} + ${num2}  =`, num1 + num2);
            break;
        case '-':
            console.log(`${num1} - ${num2}  =`, num1 - num2);
            break
        case '*':
            console.log(`${num1} * ${num2}  =`, num1 * num2);
            break;
        case '/':
            console.log(`${num1} / ${num2}  =`, num1 / num2);
            break;
        default:
            console.error("N tem esse operador")
            break;
    }    
}
op = '+'
calculadora(num1, num2, op);
op = '-';
calculadora(num1, num2, op);
op = '*';
calculadora(num1, num2, op);
op = '/';
calculadora(num1, num2, op);