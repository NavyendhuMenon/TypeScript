// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.


function displayGrade (totalMark : number) : string {

    if (totalMark > 100 || totalMark < 0) {
        return "Invalid input. Please enter a percentage between 0 and 100.";
    }

    if (totalMark > 90) {
        return "Grade: A";
    } else if (totalMark >= 80) {
        return "Grade: B";
    } else if (totalMark >= 70) {
        return "Grade: C";
    } else if (totalMark >= 60) {
        return "Grade: D";
    } else if (totalMark >= 50) {
        return "Grade: E";
    } else {
        return "Grade: Failed";
    }
}

console.log(displayGrade(70))