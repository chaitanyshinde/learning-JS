//1.
const mySym = Symbol("key1");

const skn = {
  totalStudents: 800,
  [mySym]: "myKey1",
  dept: ["comp", "IT", "Entc"],
  degree: "BE",
};

// console.log(skn);
// console.log(skn.dept);
// console.log(skn["totalStudents"]);
// console.log(skn[mySym]);

//2:
// const person = {
//   firstName: "Ram",
//   age: 22,
//   city: "Delhi",
// };

// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(Object.entries(person));
// console.log(JSON.stringify(person));

//3.
function person(name, age, city) {
  (this.name = name), (this.age = age), (this.city = city);
}

const father = new person("rama", 45, "Mumbai");
const mother = new person("lata", 40, "Banglore");

console.log(father);
