// It also returns value unlike forEach & like filter.

const arr = [2, 4, 6, 8, 10];
const result = arr.map((item) => {
  // return item>8;  //returns true false not actual values
  return item + 2;
});
// console.log(result);

//on obj
const people = [
  {
    name: "rama",
    age: 50,
  },
  {
    name: "sham",
    age: 70,
  },
  {
    name: "raju",
    age: 25,
  },
  {
    name: "rani",
    age: 12,
  },
];
const result2 = people.map((item) => {
  return item.age;
});
// console.log(result2);

//chaining:
const result3 = arr
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((num) => num > 42);
console.log(result3);
