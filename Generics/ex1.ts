

function view <T> (num1 :T) : T{

    return num1 
}


console.log(view<number>(50) )
console.log(view<string>("Nav") )


//function
function getFirstElement<T> (arr : T[]):T{
    return arr [0]
}


  const num = getFirstElement<number>([1, 2, 3])
  const str = getFirstElement<string>(["a", "b", "c"]);


  //interface

  interface Person9<K,V> {
    name : K,
    age : V
  }

  const myperson : Person9<string,number> ={name:"na",age: 25}

  console.log(myperson);
  