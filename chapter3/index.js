const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1==sym2); // false → they're unique!

const secret = Symbol("secret");
const symbol = Symbol("hello");

const user = {
  name: "Ilkhom",
  [secret]: "12345",
  [symbol]:"test"
};

console.log(user.name);        // Ilkhom
console.log(user[secret]);     // 12345
console.log(Object.keys(user)) // ["name"] → symbol is hidden
console.log(Object.getOwnPropertySymbols(user)); 

