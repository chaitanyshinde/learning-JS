const one = () => {
  console.log(this);
};
one();

//2.
const add2 = (num1, num2) => {
  return num1 + num2;
};
console.log(add2(2, 8));
const add = (num1, num2) => (num1 + num2); //NO {} NO return
console.log(add(2, 8));

