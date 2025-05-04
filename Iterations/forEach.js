//for each contains call back function:

const arr = [6, 8, 10, 12];
arr.forEach((element) => {
  //   console.log(element);
});

function print(item) {
  console.log(item);
}
// arr.forEach(print); //direct fun

//whole usecase
arr.forEach((item, index, arr) => {
  //also has arr and index
  // console.log(item , index, arr);
});

// main use on objs in arr
const myCoding = [
  {
    lanShortName: "js",
    languageName: "Javascript",
  },
  {
    lanShortName: "C++",
    languageName: "cpp",
  },
  {
    lanShortName: "py",
    languageName: "Python",
  },
];

myCoding.forEach((item) => {
  //item means one whole {}
  console.log(item.languageName, item.lanShortName);
});

//***IMP : forEach does not return any this. if you replace log line with return you will get undefined....so "filter" is used which returns values
