let marks = prompt("Enter student marks:");
let Grades;
// Check if the input is valid
if (marks < 0 || marks > 100) {
  console.log("Invalid input!");
} else {
  // Determine the grade based on the input marks
  if (marks >= 80) {
    Grades = "A";
  } else if (marks >= 60 && marks < 80) {
    Grades = "B";
  } else if (marks >= 50 && marks < 60) {
    Grades = "C";
  } else if (marks >= 40 && marks < 50) {
    Grades = "D";
  } else {
    Grades = "E";
  }
}
//Output the results
console.log(Grades);