$( document ).ready(function(){
console.log('jQuery is ready');
// Hard Mode - Get rid of those logs!
// We use jQuery now! List out all of those employees in a table that displays on the DOM.
// Show the number of years on the DOM
// Pro Mode - New Employee
// New people are getting added to out company every day. (We're growing!) Create a form that allows new employees to be added to our array and be displayed on the page.

}); // NOTE: jQuery ENDS here
// NOTE: Javascript starts here
console.log('Javascript is sourced');
// Create a function that takes in an array of employee objects.
// Each employee object will come in with a property called yearsOfExperience.
// Your function should return the total years of experience for all of the employees.
// Examples:
// Example 1
// console.log(yourFunction([
//     { name: Tony, yearsOfExperience: 10 },
//     { name: Carla, yearsOfExperience: 4 }
//     ]));
// should log
// 14
// Example 2
// console.log(yourFunction([
//     { name: Tony, yearsOfExperience: 10 },
//     { name: Carla, yearsOfExperience: 4 },
//     { name: Kris, yearsOfExperience: 14 }
//     ]));
// should log
// 28



var employees = [{name: 'Tony', yearsOfExperience: 10}, {name: 'carla', yearsOfExperience: 4}, {name: 'Kris', yearsOfExperience: 14} ];
// logs names and indexes
employees.forEach(function(employee, i){
  console.log(employee.name + ' is at index ' + i);
  console.log(employee.yearsOfExperience + ' is at index ' + i);
});

// NOTE: Base mode starts
var employee = 0;
var base = function() {
employees.forEach(function(input) {
  employee += input.yearsOfExperience;
})
return employee;
};
console.log(base(employees));
// NOTE: Base mode ENDS











//
