var scores = [92, 78, 98, 98, 78, 72, 72, 78, 78, 50, 50, 72, 92];

//created empty array to hold each converted letter
var grade = [];
for (var i = 0; i < scores.length; i++) {
  var nu = scores.sort();
  //if statement pushes designated letter if the number meets the condition
  if (nu[i] >= 90) {
    grade.push("A");
  }
  else if (nu[i] >= 80) {
    grade.push("B");
  }
  else if (nu[i] >= 70) {
    grade.push("C");
  }
  else if (nu[i] >= 60) {
    grade.push("D");
  }
  else {
    grade.push("F");
  }
}
console.log(grade);


console.log("--------------------------")


// What is the highest grade?
var highestGrade = function( array ){
  return Math.max.apply( Math, array );
};
console.log(highestGrade(scores));

// What is the lowest grade?
var highestGrade = function( array ){
  return Math.min.apply( Math, array );
};
console.log(highestGrade(scores));
