function pigIt(str){
  //Input = a string
  //Take the 1st char of each word, add it to the end of the word and, add "-ay" at the end
  console.log(str);
  
  //split string into words
  let words = str.split(" ");
  
  //special char regex
  let re = /\W+/;
  
  //loop through words
  for(let i = 0; i < words.length;i++)
  {
    //Do not perform pig latin on non-alphanumeric chars: special chars, etc
    if(re.test(words[i]))
    {
      continue;
    }
    
    //Split the word into individual letters
    let word = words[i].split("");
    
    //remove first char
    let char = word.shift();
    //add first char to end
    word.push(char);
    //add "ay" to end
    word.push("ay");
    //build the new word
    words[i] = word.join("");
  }
  //console.log(words.join(" "));
  
  //return new string
  return words.join(" ");
}
