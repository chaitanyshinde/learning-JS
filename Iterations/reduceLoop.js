const arr = [1, 3, 5, 7];

const result = arr.reduce((acc, curr) => acc + curr, 0);
// const result = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
console.log(result);


//calc total :
const courses = [
  {
    title: "Web-dev",
    price: 800,
  },
  {
    title: "ML",
    price: 8000,
  },
];

const total = courses.reduce((acc, item) => acc + item.price, 0);
console.log(total);
