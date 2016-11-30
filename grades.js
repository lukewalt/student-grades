var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


var lowestGrade = Math.min(scores);

// Use console.log to output the following criteria:
for (var i = 0; i < scores.length; i++) {
  // How many of each grade?

}


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
