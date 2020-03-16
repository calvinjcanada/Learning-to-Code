// This script joins everything together
// DOM Queries
const chatlist = document.querySelector(".chat-list");
// Class Instances
const chatUI = ChatUI(chatlist);

const chatroom = new Chatroom("gaming", "shaun");
// Test Chatroom Functionality
// chatroom
//   .addChat("hello world")
//   .then(() => {
//     console.log("chat added");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Get the chats and render to DOM
chatroom.getChats(data => {
  // Retrieve chats of the current chatroom from Firebase DB
  // console.log(data);
  chatUI.render(data);
});
