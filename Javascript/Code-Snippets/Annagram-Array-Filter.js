function anagrams(word, words) {
//This function finds all the anagrams for a given word from an array of words
//word = the word that determines what anagrams to look for
//words = array of words to search

  //console.log("Specified Word: " + word);
  //console.log("Array of Words: " + words);
  
  //Filter out words that are not the same length as the given worn
  words = words.filter(w => w.length === word.length);
  //console.log(words);
  
  
  //Loop through the words in the array
  for(let i = 0; i < words.length;i++)
  {
    //console.log("\n\nWord in array: " + words[i]);
    
    
    let letters = words[i].split("");
    let remove = false;
    //console.log(letters);
    //console.log("\n\nLetters of the word below:");
    
    //Check letters in array word
    for(let j = 0; j < words[i].length;j++)
    {
      //console.log(letters[j]);
      
      //If the array word contains a letter not present in the user word, remove the array word
      if(!word.includes(letters[j]))
      { 
        //console.log('This letter is not in the word!');
        remove = true;
        break;
        
      }
    }
    
    //If the user word contains a letter not present in the array word, remove the array word
    for(let j = 0; j < word.length;j++)
    {
      if(!words[i].includes(word.charAt(j)))
      {
        //console.log('This letter is not in the word!');
        remove = true;
        //console.log("Word failed");
        break;
        
      }
    }
    
    //Remove the word and reset the counter (indices will be changed because of the .splice())
    if(remove)
    {
      //console.log("\n\nRemoving word:");
      words.splice(i,1);
      i = -1;
      //console.log("New array: " + words + "\n");
    }
  }

  
  return words;
  
  //Best Solution
  //1. Create function to sort the letters in the word in order
  //2. Compare the resulting strings of the 2 words
  
  //String.prototype.sort = function() {
  //return this.split("").sort().join("");
  //};

  //function anagrams(word, words) {
  //return words.filter(function(x) {
  //    return x.sort() === word.sort();
  //});

}
