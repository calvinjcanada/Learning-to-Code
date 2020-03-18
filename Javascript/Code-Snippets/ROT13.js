function rot13(message){
  //Takes in a string and performs ROT13 cipher on the LETTERS only (not numbers & special chars)
  //console.log(message);
  
  //REGEX to test if char is a letter
  let re = /^[A-Z]$/i;
  
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];
  let letters = message.split("");
  
  //Loop through chars
  for(let i = 0; i < letters.length; i++) {
    //console.log(letter);
    
    //If char is a letter, rotate it 13 letters
    if(re.test(letters[i]))
    {
      //Accounts differences between lower case and upper case
      if(letters[i] === letters[i].toLowerCase())
      {
        letters[i] = letters[i].toUpperCase();
        let index = alphabet.indexOf(letters[i]);
        //console.log(index);
        letters[i] = alphabet[(index + 13) % alphabet.length];
        letters[i] = letters[i].toLowerCase();
      }
      else
      {
        let index = alphabet.indexOf(letters[i]);
        //console.log(index);
        letters[i] = alphabet[(index + 13) % alphabet.length];
      }
      //console.log(letters[i]);
    }
  }
  //console.log(letters.join("");
  return letters.join("");
}
