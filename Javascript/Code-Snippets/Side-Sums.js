function findEvenIndex(arr)
{
  //Takes in an array of integers
  //Return the index where the sum of all elements to the left are equal to the sum of all elements to the right
  //EX: {1, 2, 3, 4, 3, 2, 1} returns index 3
  //console.log(arr);
  
  //Array to store indices that meet the criteria
  let indices = [];
  
  //Loop through array
  for(let i = 0; i < arr.length; i++)
  {
    let rightSum = 0;
    let leftSum = 0;
    
    //Used for loops below because cannot say let j = i -1 or i + 1
    let leftIndex = i - 1;
    let rightIndex = i + 1;
    
      //1st element (left side will always = 0), take sum of right indices only
      if(i === 0)
      {
        for(let j = rightIndex; j < arr.length; j++)
        {
          rightSum += arr[j];
        }
        //console.log("Sums:");
        //console.log(rightSum);
        //console.log(leftSum);
      }
      else if(i === (arr.length - 1))
      {
      //Last element (right side will always = 0), take sum of left indices only
        for(let j = leftIndex; j > -1; j--)
        {
          leftSum += arr[j];
        }
        //console.log("Sums:");
        //console.log(rightSum);
        //console.log(leftSum);
      }
      else
      {
      //Take sum of left indices and sum of right indices
        for(let j = rightIndex; j < arr.length; j++)
        {
          rightSum += arr[j];
        }
        for(let l = leftIndex; l > -1; l--)
        {
          leftSum += arr[l];
        }
        //console.log("Sums:");
        //console.log(rightSum);
        //console.log(leftSum);
      }
      
     //If the sum of the left indices equals the sum of the right indices, add to array of indices that meet criteria
    if(rightSum === leftSum)
    {
      indices.push(i);
    }
  }
  //console.log(indices);
  
  //If there is an index that satisfies the criteria, return it or return -1
  if(indices.length > 0)
  {
    return indices[0];
  }
  else
  {
    return -1;
  }
  
}
