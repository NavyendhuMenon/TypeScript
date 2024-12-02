

function printNumberPattern(rows: number): void {
    let num = 1

    for (let i = 1; i <= rows; i++) {
        let row = ''
        for (let j = 1; j <= i; j++) {
            row += num + '\t'
            num++
        }
        console.log(row)
    }
}

printNumberPattern(4)
