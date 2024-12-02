
//Write a program to add to two dimensional arrays



function addMetrix(arr1: number[][], arr2: number[][]): number[][] {
    const result: number[][] = [];
  
    for (let i = 0; i < arr1.length; i++) {
      const row: number[] = [];
  
      for (let j = 0; j < arr1[i].length; j++) {
        row.push(arr1[i][j] + arr2[i][j]);
      }
  
      result.push(row);
    }
  
    return result;
  }
  
  // Test case
  const array11 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const array22 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ];
  
  const su= addMetrix(array11, array22);
  
  console.log("Sum of the two arrays:");
  su.forEach((r)=>console.log(r.join(" "))
  )