let score = Number(prompt("enter a number: "));
let grade;

if (score >= 90) {
    grade = "excellent";
}
else if (score >= 80) {
    grade = "good";
}
else if (score >= 70) {
    grade = "average";
}
else if (score >= 60) {
    grade = "below average";
}
else {
    grade = "needs improvement";
}

switch (grade) {
    case "excellent":
        grade = "A"; // Changed from console.log
        break;
    case "good":
        grade = "B"; // Changed from console.log
        break;
    case "average":
        grade = "C"; // Changed from console.log
        break;
    case "below average":
        grade = "D"; // Changed from console.log
        break;
    default:
        grade = "E"; // Changed from console.log
}

let status = score >= 40 ? "Passed" : "Failed";


console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);
