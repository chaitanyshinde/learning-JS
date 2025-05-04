//For of Loop
const arr = [1, 2, 4, 5, 6];
for (const i of arr) {
  //   console.log(i);
}

//Map:
const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("US", "United States");
// console.log(map);
for (const [key, value] of map) {
  //this structure will not work for objects
  console.log(key, "-", value);
}

//----------------------------------------------------------------------

//for in Loop:
//on Object
const myObj = {
  cpp: "C++",
  JS: "JavaScript",
};
for (const key in myObj) {
  //for in loop
  //   console.log(`${key} -> ${myObj[key]}`);
}

//Applying ON array : here key means array indexes
const arr1 = [2, 4, 6, 8];
for (const key in arr1) {
  //    console.log(key ,"-", arr1[key]);
}

//We can't apply for in on MAP, it is not iteratable*
