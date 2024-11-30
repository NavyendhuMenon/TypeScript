

//Write a program to find the sum of all the odd numbers for a given limit



function sumOfOdd (limit: number) :void {

    let sum =0

    for (let i=0 ; i<= limit ; i++){

        if (i%2 !=0){
          sum += i
        }

    }

    console.log("Sum of odd numbers:", sum)

}



sumOfOdd(10)