const num = num => num*3;
const add = (a,b) => a + b;
const giveMe5 = () => 5;

const result1 = giveMe5();

const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(10,8);
console.log(result2);