function cakes(recipe, available) {
  //Takes in 2 objects
  //1st object = recipe (ingredients needed)
  //2nd object = ingredients you have
  //return how many times you can fulfill the recipe
  
  //Can only print objects after stringify-ing them
  console.log("Recipe: " + JSON.stringify(recipe));
  console.log("\nYou have: " + JSON.stringify(available));
  
  
  
  let possible = true;
  let count = 0;
  
  while(possible)
  {
    
    //This is how you loop through an object's properties
    for(const property in recipe)
    {
      
      //Check to see if you have the current ingredient first
      let hasIngredient = available.hasOwnProperty(property);
      //console.log(hasIngredient);
      //console.log("Has " + property + ": " + available.hasOwnProperty(property));
      
      //if you do not have the ingredient, break out of the loop
      if(available.hasOwnProperty(property) === false )
      {
        possible = false;
        console.log("\nDo not have this ingredient: " + property);
        break;
      }
      
      //calculate how much you have left after applying the ingredients that you have
      available[property] -= recipe[property];
      //console.log("\nIngredient: " + property + " Sum: " +  available[property]);
      
      //if you no longer have enough, it is not possible to make another
      if(available[property] < 0)
      {
        possible = false;
        break;
        
      }
    }
    
    //increment the count
    if(possible)
    {
      count++;
    }
    //console.log("Count: " + count);
  }
  return count;
}
