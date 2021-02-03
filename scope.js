// if we use let or const the the value can't be accessed outside of the scope
// if we use var then we can use variable outside of the scope

let bonus = 20;
function sum(first, second){
    let result = first+second+bonus;
    console.log(bonus);
    return result;
}
const output =sum(3,7);
console.log(bonus);
console.log(output);