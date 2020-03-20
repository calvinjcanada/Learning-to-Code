function dirReduc(arr){
  //Given a list of directions
  //EX: NORTH, SOUTH, EAST, WEST
  //Each direction has an opposite direction that cancels it out
  //EX: NORTH > SOUTH, SOUTH > NORTH, EAST > WEST, WEST > EAST
  //If consecutive directions cancel out, remove both of them
  //Return the list of directions 
  //console.log("Begin: " + arr);
  let dir = arr;
  
  //Establish table of opposites
  let directions = [
    {direction: "NORTH", opposite: "SOUTH"},
    {direction: "SOUTH", opposite: "NORTH"},
    {direction: "EAST", opposite: "WEST"},
    {direction: "WEST", opposite: "EAST"},
  ];

  //Counter
  let i = 0;
  //Used to know if we need to return to beginning of array
  let shift = false;
  
  //Cycle through directions
  while(i < dir.length)
   {
     
   //if a shift was made, go back to the start of array 
   //Because the indices of each element has been changed
     if(shift)
     {
        i = 0;
        shift = false;
        continue;
     }
     
     //if the current and next element are opposites, remove both
     if(dir[i + 1] === directions.find(element => element.direction === dir[i]).opposite)
     {
       //Remove the consecutive elements
        dir.splice(i,2);
      //Note that all element indices have shifted
        shift = true;
     }
     else
     {
     //If nothing changes, go to next element
       i++;
     }
     //console.log(dir);
   }
   
   return dir;
  
}
