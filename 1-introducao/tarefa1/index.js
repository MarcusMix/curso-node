const arr = [10, 98, 200, 88];
const [a, b, ...rest] = arr;

function soma(a, b) {
    return a + b;
}


console.log(soma(a, b))
console.log(soma(a, rest))