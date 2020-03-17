function XO(str) {
    //This functions checks a string for the number of Os and Xs
    //Returns true if the number of Os and Xs are equal
    //Returns true if no Os or Xs are present
    //Returns false if the number of Os and Xs are not equal
    
    console.log(str);
    
    //Match all Os in a string (returns an array)
    //g = match all (not just first instance)
    //i = case-insensitive
    // || [] = return an empty array if no matches (match returns null for no matches instead of 0)
    let Os = (str.match(/o/gi) || []).length;
    console.log(Os);
    console.log(str.match(/o/gi));
    
    //Match all Xs in a string (returns an array)
    //g = match all (not just first instance)
    //i = case-insensitive
    // || [] = return an empty array if no matches (match returns null for no matches instead of 0)
    let Xs = (str.match(/x/gi) || []).length;
    console.log(Xs);
    console.log(str.match(/x/gi));
    
    if(Os !== Xs)
    {
      return false;
    }
    else
    {
      return true;
    }
    
    //Best solution
  //let x = str.match(/x/gi);
  //let o = str.match(/o/gi);
  //return (x && x.length) === (o && o.length);
    
}
