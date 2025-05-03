(function printMyname() {
  console.log("Chaitany");
})();

(function printMyname2(name) {
  console.log(`${name}`);
})("chaitany");

((name) => {
  console.log(`${name}`);
})("chaitany");

//Immediately Invoked Functions : close fun in () and then () of execution - used to avoid global scope pollution - (); this ";" is needed at the end.
