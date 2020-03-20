function validate(password) {
//atleast 6 chars
//atleast 1 uppercase
//atleast 1 lowercase
//atleast 1 number
console.log(password);

//Use "lookahead" for each group (number, uppercase, lowercase)
//[a-zA-Z0-9]{6,} = atleast 6 chars
//^ = must start with
//$ = must start with
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
