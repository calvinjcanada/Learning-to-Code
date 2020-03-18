function list(names){
  console.log(names);
  
  //Takes in an array of key-value pairs of names and formats into a sentence
  //Ex: James, Barry & Kate
  
  if(!Array.isArray(names) || !names.length)
  {
  //Empty Array Scenario
    return "";
  }
  else if(names.length === 1)
  {
  //Single Name Scenario
    return names[0].name;
  }
  else
  {
  //Multi-Name Scenarios
    let str = names[0].name;
    //console.log(str);
    
    for(let i = 1; i < names.length; i++)
    {
      if(i !== names.length - 1)
      {
      //Adds & in-between last and second to last names
        str += ", " + names[i].name;
      }
      else
      {
        str += " & " + names[i].name;
      }
    }
    return str;
  }
  
}
