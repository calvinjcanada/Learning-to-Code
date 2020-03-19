function duplicateCount(text){
  //Takes in a string
  //Counts the number of distinct letters and numbers that occur more than once (case-insensitive)
  //Returns the number of distinct letters and numbers that repeat in the string
  //EX: Indivisibility would result in only "i" being repeat so the function would return 1
  
  //Stores chars that have been repeated in the string
  let repeat = [];
  let chars = text.toLowerCase().split("");
  //console.log(chars);
  
  //Loop through the chars
  chars.forEach(char => {
    //Count number of occurences in the string using Regex (take the length of the returned array)
    let matches = (text.match(new RegExp(char,"gi")) || []).length;
    //console.log(matches);
    
    //If the char is in the string 2 times or more AND it is not already added to the "repeat" array (distinct, case-insensitive)
    //Add it to the arrar
    if(matches > 1 && !repeat.includes(char))
    {
      repeat.push(char);
    }
  })
  
  //Return the number of distinct chars or 0
  //console.log(repeat);
  return repeat.length || 0;
  
}
