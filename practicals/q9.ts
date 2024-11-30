
//Write a program to print the following pattern


function printPattern(rows: number): void {

    for (let i = 1; i <= rows; i++) {
        let row = ''
        for (let j = 1; j <= i; j++) {
            row += j + ' '
        }
        console.log(row.trim())
    }
}


printPattern(5)
