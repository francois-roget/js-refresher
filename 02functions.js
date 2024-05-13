function substraction(a, b) {
  return a - b;
}

const addition = (a, b) => a + b;
const square = (a) => a * a;

addition.allowed = true;
console.log(addition);

const myOption = { safe: true, a: "test" };

const myMethod = ({ safe }) => {
  console.log(safe);
};

myMethod(myOption);

const curriedAddition = (a) => {
  return (b) => {
    return a + b;
  };
};

const add1 = curriedAddition(1);
console.log(add1(2));

const arr = [1, 2, 3, 4];
const arrSquare = arr.map((e) => e * e);
console.log(arrSquare);

// function add(a,b) {
//     return a + b;
// }
//
// add.displayName = 'Function declaration addition';
//
// console.log(add(5,3));
// console.log(add);
//
// const addition = (a, b) => a + b;
//
// // addition.displayName = 'Function expression addition';
//
// console.log(addition(5, 3));
// console.log(addition);
//
// const square = (a) => a * a;
//
// const myOptions = {
//     safe: true,
// }
//
// const myMethod = ({safe}) => {
//     console.log(safe);
// }
//
// myMethod(myOptions);
//
//
// const curriedAddition = (a) => {
//     return (b) =>{
//         return a + b;
//     }
// }
//
// const add1 = curriedAddition(1);
//
// console.log(add1(2));
