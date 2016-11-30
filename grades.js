var scores = [72, 78, 98, 98, 78, 62, 62, 78, 78, 50, 50, 72, 92];

//created empty array to hold each converted letter
var letterGrade = [];
for (var i = 0; i < scores.length; i++) {
  var nu = scores.sort(function(a, b){return b-a});
  //if statement pushes designated letter if the number meets the condition
  if (nu[i] >= 90) {
    letterGrade.push("A");
  }
  else if (nu[i] >= 80) {
    letterGrade.push("B");
  }
  else if (nu[i] >= 70) {
    letterGrade.push("C");
  }
  else if (nu[i] >= 60) {
    letterGrade.push("D");
  }
  else {
    letterGrade.push("F");
  }
}




var tally = {
    A: null,
    B: null,
    nickels: null,
    pennies: null
  };

for (var i = 0; i < letterGrade.length; i++) {
  console.log(letterGrade[i]);
}



console.log("--------------------------")


// What is the highest grade?
var highestGrade = function( array ){
  return Math.max.apply( Math, array );
};
console.log("Highest Grade: " + highestGrade(scores));

// What is the lowest grade?
var highestGrade = function( array ){
  return Math.min.apply( Math, array );
};
console.log("Lighest Grade: " + highestGrade(scores));
