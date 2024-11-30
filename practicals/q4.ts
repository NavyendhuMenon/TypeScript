

// Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
// Program should accept an input from the user and output a message as “Passed” or “Failed”


function findResult (mark :number) : string {

    if  (mark <0||mark > 100 ){

        return"Please check the mark you have entered"

    } 

    if (mark >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}



console.log(findResult(60))