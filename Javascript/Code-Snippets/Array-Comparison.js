//This function takes in 2 arrays.
// It removes values from array A that are also present in array B and returns the newly editted array A

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
  //Loop through array B
    //console.log(b[i]);
    if(a.includes(b[i],0))
    {
      //console.log("Yes");
      let index = a.indexOf(b[i]);
      //console.log(index);
      a.splice(index, index + 1);
      //console.log(a);
    }
    else
    {
      //console.log("No");
      continue;
    }
  }
  return a;
  
}
