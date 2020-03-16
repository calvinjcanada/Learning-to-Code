// Create a class constructor
// New ES6 JS standard
// Easier than the Proto model (original)
class User {
  // Constructor method
  constructor(username, email) {
    // class properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  // Method Chaining
  // 1. Method must return a value for it to be chained
  // 2. When we don't return a value, 'undefined' is automatically returned (can't chain)
  // 3. Return this; (allows method chaining)
  // EX: userOne.login().increaseScore().logout();
  login() {
    console.log(`${this.username} has logged in!`);
    return this;
  }
  logout() {
    console.log(`${this.username} has logged out!`);
    return this;
  }
  increaseScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}!`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    // Subclass constructor
    // References the parent class constructor
    // this is required
    super(username, email);
    this.title = title;
  }

  deleteUser(user) {
    users = users.filter(user => {
      // Delete the user from the users array if it matches the username inputted into the function
      return user.username !== user.username;
    });
  }
}

// When you create a new object from the class, you are creating an instance of the object
const userOne = new User("Mario", "mario@gmail.com");
const userTwo = new User("Shaun", "shaun@gmail.com");
const userThree = new Admin("Calvin", "calvin@gmail.com", "superUser");
// 'NEW' keyword
// 1. Creates new empty object {}
// 2. Binds value of 'THIS' to the new empty object
// 3. Calls Constructor function to 'build' the object

console.log(userOne, userTwo);
// Class Methods
userOne.login();
userTwo.login();
userOne.logout();
userTwo.logout();
userOne.increaseScore();

let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
