
//Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 


function findDay ( day : number) : string {

    switch (day){
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesaday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default : 
            return "Invalid Entry"       
    }
}


console.log(findDay(8))
console.log(findDay(6))
console.log(findDay(1))