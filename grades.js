var scores = [72, 78, 98, 98, 78, 62, 62, 78, 78, 81, 50, 72, 85];

//created empty array to hold each converted letter
var letterGrade = [];

for (var i = 0; i < scores.length; i++) {
  var nu = scores.sort(function(a, b){return b-a});  //reverses array order

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

// empty object to push number of each grade
var tally = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  f: 0
};

// loop that places the occurances of each letter grade with coresponding key of object
for (var i = 0; i < letterGrade.length; i++) {

  if (letterGrade[i] == "A"){
    tally.a += 1;
  } else if (letterGrade[i] == "B") {
    tally.b += 1;
  } else if (letterGrade[i] == "C") {
    tally.c += 1;
  } else if (letterGrade[i] == "D") {
    tally.d += 1;
  } else {
    tally.f += 1;
  }

}
// printing number of each letter grade to console
console.log(tally);

// calculates highest grade
var highestGrade = function( array ){
  return Math.max.apply( Math, array );
};
console.log("Highest Grade: " + highestGrade(scores));

// calculates lowest grade?
var highestGrade = function( array ){
  return Math.min.apply( Math, array );
};
console.log("Lighest Grade: " + highestGrade(scores));
