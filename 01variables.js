// Primitives
const a = 2;
const b = "demo";
let c = true;

const a1 = 2;
console.log(a === a1);
const b1 = "demo";
console.log(b === b1);

const d = { name: "john" };
const d1 = { name: "john" };
console.log(d === d1);

const props = {
  e: 1,
  f: "something",
  g: d,
};

// destructuring
//const e = props.e;
let { e, g, ...rest } = props;
console.log(e);
console.log(rest);

console.log(e);
g.name = "Wayne";
console.log(d);

// Spread
const copyProps = { ...props, e: 2 };

// const a1 = 2;
// console.log(a1 === a);
//
// const b1 = 'demo';
// console.log(b1 === b);

// Objects
// const d = { name: 'john' };
// const d1 = { name: 'john' };
// console.log(d1 === d);
//
// const props = {
//     a: 1,
//     b: 'demo',
//     c: 'true',
//     d,
// }

// Destructuring
// const { a, d: { name } } = props;
// console.log(a);
// console.log(name);

// Spread
// const copyProps = { ...props };
// console.log(copyProps === props)
