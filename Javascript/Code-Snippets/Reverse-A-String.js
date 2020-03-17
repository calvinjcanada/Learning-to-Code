function spinWords(userString){
  // This function will only reverse words that have a length of 5 or more
  let words = userString.split(" ");
  
  //Verify that you have each word
  //words.forEach(word => console.log(word));
  
  //Loop through the words
  for(let i = 0; i < words.length; i++)
  {
    //console.log(`position ${i}:`);
    //console.log(words[i]);
    let letters = "";
    let newWord = "";
    
    //If the word has 5 or more letters, reverse it
    if(words[i].length >= 5)
    {
      letters = words[i].split("");
      newWord = letters.reverse().join("");
      //console.log(newWord);
      words[i] = newWord;
    }
  }
  return words.join(" ");
  
  //Best solution
  // return words.split(' ').map(function (word) {
  //  return (word.length > 4) ? word.split('').reverse().join('') : word;
  //}).join(' ');
}
