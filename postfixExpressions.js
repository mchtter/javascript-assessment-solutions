function postfixExpressions(expressions) {
    var stack = [];
    let exp = expressions.split(' ')

    for(var e of exp) {
        if(!isNaN(parseInt(e))) {
            stack.push(parseInt(e));
        } else {
            var first = stack.pop();
            var second = stack.pop();
            switch(e) {
                case '+':
                    stack.push(first + second);
                    break;
                case '*':
                    stack.push(first * second);
                    break;
            }
        }
    }
    return stack[0]
}

console.log(postfixExpressions("1 2 3 * +") == 7 );
console.log(postfixExpressions("1156 12 11 * +") ==  1288)
console.log(postfixExpressions("5 2 + 3 *") ==  21)
console.log(postfixExpressions("5 2 * 2 * 4 +") ==  24)
console.log(postfixExpressions("5 2 + 2 + 4 +") ==  13)
console.log(postfixExpressions("3 2 + 2 4 + *") ==  30)
console.log(postfixExpressions("3 2 2 4 + + *") ==  24)
console.log(postfixExpressions("5") ==  5)
console.log(postfixExpressions("0 1 *") ==  0)
console.log(postfixExpressions("5 5 + 6 6 + 1 1 + * +") ==  34)
