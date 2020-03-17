//This function takes in 2 arrays.
// It removes values from array A that are also present in array B and returns the newly editted array A

function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if(b.includes(a[i],0))
    {
      a.splice(i,1);
      
      //Reset the index to the 1st element because splicing the array updates the indices
      //This causes some elements to be skipped over
      i = -1;
    }
  }
  return a;
  
}
