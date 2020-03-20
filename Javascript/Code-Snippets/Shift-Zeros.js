var moveZeros = function (arr) {
  //Takes in an array of integers
  //Moves all 0s to the end of the array while preserving the order
  //Returns the new array
  
  //console.log(arr);
  
  //Separate the zeros
  let zeros = arr.filter(element => element === 0);
  //Separate the non-zeros
  let nonZeros = arr.filter(element => element !== 0);
  
  //console.log(zeros);
  //console.log(nonZeros);
  
  //Add the zeros back
  zeros.forEach(element => {
    nonZeros.push(element);
  });
  
  return nonZeros;
}
