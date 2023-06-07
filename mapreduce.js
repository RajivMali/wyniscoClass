const { slice, transform } = require("lodash");
const data = require("./student_Data.json");

//console.log(data, 'data');

let slicedData = data.slice(0, 5);

// console.log(sliceData)

// let obj = {
//     name : "sachin",
//     //pastStudent : true
// }

// obj.pastStudent = true;
// obj['pastStudent'] = true;
// console.log(obj)

// function addField(x) {
//    return x.pastStudent
// }

// const addedField = data.map(addField);

// console.log(addedField)

// let a = slicedData.map(item =>{
//    item['pastStudent'] = true;
//    return item
// })
// console.log(a,'AA');

// let a = slicedData.map(item =>{
//     if (item.University_Name.toLowerCase().includes("carolina")){
//     item['carolinaStudent'] = true;
// }else{
//     item['carolinaStudent'] = false;
// }
//     return item
//  })
//  console.log(a,'AA');

// let a = slicedData.map((item) =>{
//     const keys = Object.keys(item);
//     return keys;
// })
// console.log(a.length)

//******solution******
// const data = require("./Student_Data.json");

// let sliced_data = data.slice(0, 5);

// sliced_data.map((item) => {
//   item["Key_Length"] = Object.keys(item).length + 1;

//   for (x in item) {
//     if (Array.isArray(item[x])) {
//       item["isArray"] = true;
//     }
//   }
//   return item;
// });
// console.log(sliced_data);

/*********************************************/
// Q1
// case insensitive
//loop over data
// find the key in any of values
// Once I find the key

// function findKey(data, keyword) {
//     //first transform keyword to lowerCase for case insensitivity
//     const lowerCaseKeyword = keyword.toLowerCase();

//     // using forEach to iterate over each object in data
//     data.forEach((data) => {
//      // using for in to iterate over the properties of each object
//       for (let prop in data) {
//      // used hasOwnProperty   to check if prop exist in the object
//         if (data.hasOwnProperty(prop) && data[prop].toString().toLowerCase().includes(lowerCaseKeyword)) {
//           data.keywordExist = true;
//           break;
//         }
//       }
//     });
//   }

//   findKey(data, "Science");
//   console.log(data);
/*********************************************/

//Q2
//loop over data
// Career_Url <---/wynisco
// url is empty or does not exist leave it alone
//use map
// function addUrl(data, urlPath) {
//     //use reduce to iterate over the data
//     return data.reduce((accumulator, object) => {
//     //checks if object has Career_url and not empty
//       if (object.hasOwnProperty("Career_Url") && object.Career_Url !== "") {
//         object.Career_Url += urlPath;
//       }
//       //accumulator is updated with new array
//       accumulator.push(object);
//       return accumulator;
//     }, []);
//   }

//   const updatedData = addUrl(data, "/wynisco");
//   console.log(updatedData);
/*********************************************/
// Q3 ( filter)
//loop over data
// Filter graduation date is less than 2020
// Only objects who has graduation date 2020 and less

// takes in two parameters the data and the year
// function filterByYear(data, year) {

//     return data.filter(object => object.Graduation_Year <= year);
//   }
//   const filteredArray = filterByYear(data, 2020);
//   console.log(filteredArray)

/*********************************************/
// map, filter, reduce, for Each, slice ,splice, push,includes
// let filtered = data.filter(i=> i.address && i.address.city === "cary");

// console.log(filtered);

// let filtered = data.filter(i=> i.hasownproperty.favs && i.favs.includes("445666414141"));

// console.log(filtered);

//AVERAGE ( 1st reduce)
// average graduation Year ( 2022, 2022) /entries
// property exists but year is empty ( 2021)
// if property does not exist - Ignore
//////////////////////////////////////////////////////////

// let averageValue = function(data) {
//     let sum = data.reduce(function(total, obj) {

//       if (obj.hasOwnProperty('Graduation_Year')) {
//         //if obj has Graduation_Year and is not empty returns total + year
//         if (obj.Graduation_Year !== '') {
//           return total + obj.Graduation_Year;
//         } else {
//         //if empty adds 2021 for that entry
//           return total + 2021;
//         }
//         //if it doesnt have grad year it will just return total
//       } else {
//         return total;
//       }
//       //initial value of total sum is passed
//     }, 0);

//     let average = sum / data.length;
//     console.log(average);
//   }
//     averageValue(data);

//////////////////////////////////////////////////////////
// MAX
// filter out all the entries which maximum Graduation_Year
// Filter out all the entries with those years

// function filterOutMaxGraduationYear(data) {
// //using spread operation to pass just the graduation year array to Math.max to find max value
//     const maxYear = Math.max(...data.map(obj => obj.Graduation_Year));
// //filter checks if its Graduation_Year property is not equal to maxYear
//     const filteredData = data.filter(obj => obj.Graduation_Year !== maxYear);

//     return filteredData;
//   }

//   console.log(filterOutMaxGraduationYear(data));

//citigroup acquired by axisbank
// .replace ( regex)
//  citigroup --> axisbank

// https://citigroup.com/citigrouprewards -->axisbank.com/axisbankrewards

//use replace domain --- .com - ends with ( REGEX )
//////////////////////////////////////////////////////////

// function replaceDomain(data) {

//     for (let i = 0; i < data.length; i++) {
//         //if Career_Url exist use replace,  /citigroup\.com/ to axisbank.com
//       if (data[i].Career_Url) {
//         data[i].Career_Url = data[i].Career_Url.replace(/citigroup\.com/, 'axisbank.com');
//       }
//     }

//     console.log(data);
//   }

//    replaceDomain(data);
//////////////////////////////////////////////////////////

// if input is +1(800)FLOWERS , return the number it represents
// by using keypad mobile phone format
const lookupTable = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 6,
  N: 6,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 8,
  U: 8,
  V: 8,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
}

function getNumber(str) {
  let ret = str.split("").map((i) => {
    return keypadConverter(i);
  });

  console.log(ret.join(""));
}

function keypadConverter(str) {
  return lookupTable[str];
}
getNumber("FLOWERS");
