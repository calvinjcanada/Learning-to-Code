function orderWeight(strng) {
    //Takes a string of numbers (can be empty)
    //For each number, add the individual digits and add them up to get a sum for the number
    //Sort the numbers by the new sum
    //EX: "100 2 101" results in "100 101 2"
    //EX: 100 =1+0+0=1, 101=1+0+1=2, 2=2
    
    //console.log(strng);
    let str = strng.trim();
    let nums = str.split(" ");
    let sums = [];
    let final = [];
    
    //console.log(nums);
    
    //Calculate the sums for each char and store them
    nums.forEach(num => {
      let sum = 0;
      for(let i = 0; i < num.length; i++)
      {
        //convert char into integer and add to the sum
        sum += parseInt(num[i]);
      }
      sums.push(sum);
      //console.log(sums);
    })
    
    //Create an array of objects to correlate scores to numbers
    let newOrder = [];
    for(let i = 0; i < nums.length; i++)
    {
     //create new object for each number and add to arrau
     newOrder.push({
       "number":nums[i],
       "sum":sums[i]
     });
    }
    //console.log(newOrder);
    
    //Sort the numbers by sum and also by number (if sums are equal)
    //Ternary Operator: Compare 2 elements sum property, if they are equal then compare the number property
    //1 = higer precedence
    //-1 = lower precedence
    newOrder.sort((a,b) => (a.sum > b.sum) ? 1 : (a.sum === b.sum) ? ((a.number > b.number) ? 1 : -1) : -1);
    //console.log(newOrder);
    
    //Build final sorted array
    newOrder.forEach(number => {
      //console.log(number.number);
      final.push(number.number);
      
    });
    
    return final.join(" ");
}
