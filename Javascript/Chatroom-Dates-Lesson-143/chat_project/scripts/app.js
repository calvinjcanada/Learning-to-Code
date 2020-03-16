// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector("update-mssg");
// Used to send a feedback message to the user
const rooms = document.querySelector(".chat-room");

// Add a new chat
newChatForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  // Use the HTML id from the input field to retrieve the message that the user typed
  chatroom
    // Reference chatroom that is initialized below
    .addChat(message)
    // Adds message to database
    .then(() => newChatRoom.reset())
    // Resets the form
    .catch(err => {
      console.log(err);
    });
});

// Update Username
newNameForm.addEventListener("submit", e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  // Get the name that the user enters via the id of the Name submit field
  chatroom.updateName(newName);
  // Update name
  newNameForm.reset();
  // Reset the form
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => {
    // Show the updateMssg for a few seconds then make it disappear
    updateMssg.innerText = ``;
  }, 3000);
});

// Update chatroom
rooms.addEventListener("click", e => {
  // console.log(e.target);
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    // if the user clicked a new chatroom, clear the current chats on the page
    chatroom.updateRoom(e.target.getAttribute("id"));
    // update chatroom based on the id of the element that the user clicked
    chatroom.getChats(chat => {
      chatUI.render();
      // get the messages stored in the DB for the new chatroom, update the HTML to display these
    });
  }
});

// check local storage for a name
// if one is stored, use it instead of a default name
const username = localStorage.username ? localStorage.username : "anon";
// If there is a username in local storage, use it or use anon as the default

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("gaming", username);

// get chats & render
chatroom.getChats(data => chatUI.render(data));
