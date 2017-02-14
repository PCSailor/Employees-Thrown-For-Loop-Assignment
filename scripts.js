$( document ).ready(function(){
// console.log('jQuery is ready');
// Hard Mode - Get rid of those logs!
// We use jQuery now! List out all of those employees in a table that displays on the DOM.
// Show the number of years on the DOM

// QUESTION:
// Do I create a table in HTML?
// Do I try and import the JS array into HTML and create the table that way?
// Do I import the array into jQuery and then push that table into html?







employees.forEach(function(input){
   $('#employeeTableBody').append(

     '<tr>' + '<td>' + input.name + '</td>' + '<td>' + input.yearsOfExperience + '</td>' + '</tr>'
  ); });
  // console.log(input.name);
  // console.log(input.yearsOfExperience);

// Manual Version:
// //   '<tr>' +
// //     '<td> ' + employees[1].name + '</td>' + '<td> ' + employees[1].yearsOfExperience + '</td>' +
// //   '</tr>' +
// //   '<tr>' +
// //     '<td> ' + employees[2].name + '</td>' +'<td> ' + employees[2].yearsOfExperience+ '</td>' +
// //   '</tr>'
// // // forEach loop has append inside
// );
// });


}); // NOTE: jQuery ENDS here
//
//
//
// NOTE: Javascript starts here
// console.log('Javascript is sourced');
// NOTE: Base Problem Starts
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
// NOTE: ForEach Test
employees.forEach(function(employee, i){
  // console.log(employee.name + ' is at index ' + i);
  // console.log(employee.yearsOfExperience + ' is at index ' + i);
});
// NOTE: Base Problem:
var employee = 0;
var base = function() {
employees.forEach(function(input) {
  employee += input.yearsOfExperience;
})
return employee;
};
// console.log(base(employees));
// NOTE: Base mode ENDS
