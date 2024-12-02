

//Write a program to identify whether a string is a palindrome or not



function isPalindrome (str :string) : boolean{

    for (let i=0 ; i<Math.floor(str.length/2); i++){

        if(str[i]!= str[str.length-1-i]){
            return false
        }
    }

    return true 
}

let str1 ="malayalam"
let str2 ="hello"

console.log(isPalindrome(str1));

console.log(isPalindrome(str2));
