// Write your solution in this file!
let employee = {
  name: 'Jake Bruemmer',
  streetAddress: '1600 Pennsylvania Avenue'
}

let updateEmployeeWithKeyAndValue = function (employee, key, value) {
  let newObj = {};
  newObj[key] = value;
  return { ...employee, ...newObj };
}

let destructivelyUpdateEmployeeWithKeyAndValue = function (employee, key, value) {
  employee[key] = value;
  return employee;
}

let deleteFromEmployeeByKey = function (employee, key) {
  let newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

let destructivelyDeleteFromEmployeeByKey = function (employee, key) {
  delete employee[key];
  return employee;
}