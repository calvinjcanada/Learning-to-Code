function dblLinear(n) {
    //Takes in an integer which is the index of the integer to return in the array
    //Twice Linear calculates 2 new array entries for each element in the array
    //See below:
    //1. y = 2 * x + 1
    //2. z = 3 * x + 1
    
    //console.log("N:"+n);
    
    //Array always starts with 1
    let numbers = [1];
    
    //Start the calculatios
    for(let i = 0; i < n; i++)
    { 
//      console.log(i);

      //Sometimes the numbers are out of order which causes some higher numbers to be calculated before some lower numbers
      numbers.sort((a,b) => {return a - b});
      
//       if(i === n - 1)
//       {
//         numbers.sort((a,b) => {return a - b});
//         console.log(numbers);
//         return numbers[n];
//       }

      //console.log("Number:" + numbers[i]);
      
      //Calulate and push y (if not already in array)
      let y = (2 * numbers[i]) + 1;
      if(!numbers.includes(y))
      {
        numbers.push(y);
      }
      
      //Calculate and push z (if not already in array)
      let z = (3 * numbers[i]) + 1;
      if(!numbers.includes(z))
      {
        numbers.push(z);
      }
    }
    
    //Sort before returning
    numbers.sort((a,b) => {return a - b})
    return numbers[n];
    
}
