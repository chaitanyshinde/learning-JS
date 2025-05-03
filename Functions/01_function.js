//1.
function add(num1, num2) {
  console.log(num1 + num2);
}
// add(2,3);
function add2(num1, num2) {
  return num1 + num2;
}
const result = add2(2, 3);
// console.log(result);

//2.
function luckyNumbers(num1, ...others) {
  console.log(num1);
  console.log(others);
}
// luckyNumbers(2,4,6,8,10);

//3.objects
function printObjects(anyObject) {
  console.log(
    `name of object is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
const BMW = {
  userName: "BMWc3",
  price: 3000000,
};
// printObjects(BMW);

// printObjects({
//   userName: "BMW",
//   price: 200000,
// });


//4. fun exp
const addOne = function(num){
    return num + 1;
}
// console.log(addOne(3));


