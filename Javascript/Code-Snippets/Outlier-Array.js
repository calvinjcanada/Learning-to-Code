
function findOutlier(integers){
  //Takes in an array of all odd or even except for 1 integer that is the opposite of the rest
  //Returns the outlier integer
  
  //console.log(integers);
  
  let evens = 0;
  let odds = 0;
  let array_type = "";
  let number = 0;
  
  //See how many numbers are odd vs even to find the majority
  for(let i = 0; i < integers.length;i++)
  {
    if(integers[i] % 2 === 0)
    {
      evens++;
    }
    else
    {
      odds++;
    }
  }
  
  if(evens > odds)
  {
    array_type = "even";
  }
  else
  {
    array_type = "odd";
  }
  
  //console.log(`This is an ${array_type} array!`);
  
  //Once determined if it is an even or odd array, find the outlier
  switch(array_type)
  {
    case "even":
      for(let i = 0; i < integers.length;i++)
      {
        if(integers[i] % 2 != 0)
        {
          number = integers[i];
        }
      }
      return number;
      break;
    case "odd":
      for(let i = 0; i < integers.length;i++)
      {
        if(integers[i] % 2 == 0)
        {
          number = integers[i];
        }
      }
      return number;
      break;
    default:
      console.log('there was an error');
  }
  
  
  
}
