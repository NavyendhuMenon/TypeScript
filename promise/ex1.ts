

let promise = new Promise <string> ((resolve, reject)=>{

    const isSucess = true

    if (isSucess){
        resolve("operation success")
    }else{
        reject("Operation failed")
    }
});

promise.then((message)=>{console.log(message)})
       .catch((error)=>{console.log(error)})