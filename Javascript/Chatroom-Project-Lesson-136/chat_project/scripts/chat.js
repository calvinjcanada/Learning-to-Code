// Classes:
// 1. chatroom = all chatroom data & messages, interact with Firebase database
// Adding new chat documents
// Setting up a real-time listener to get new chats
// Updating the username
// Updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    // Reference to DB collection that will house the messages
    this.chats = db.collection("chats");
    this.unsubscribe;
    // Used to store realtime listener and run unsubscribe function
  }
  async addChat(message) {
    // format chat object
    // this is what is being sent to the database
    const now = new Date();
    const chat = {
      // Chat object that is stored in DB
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat into a document in the database
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    // Realtime listener to receive the chats in the database
    // Store Realtime listener in a variable to enable the ability to unsubscribe (stored as a function)
    this.unsubscribe = this.chats
      .where("room", "==", this.room)
      // Only retrieve messages realtime for the chatroom that we are in (else you will retrieve updates from all chatroom)
      .orderBy("created_at")
      // Sort by timestamp
      .onSnapshot(snapshot => {
        // docChanges = returns all changes to that have been done to the database (from the snapshot)
        // Cycle through these changes
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            // Update the UI
            // Take the change and retrieve the data from it, pass into callback function (defined later in the code)
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
  }

  updateRoom(room) {
    this.room = room;
    // update the chatroom
    console.log("room updated");
    if (this.unsubscribe) {
      // Check to see if there is actually a realtime listener first
      this.unsubscribe();
      // unsubscribe from previous chatroom updates
    }
  }
}

// // Run the following callback function in intervals specified
// setTimeout(() => {
//   // Simulates a user changing the chat room
//   chatroom.updateRoom("gaming");
//   chatroom.updateName("yoshi");
//   chatroom.getChats(data => {
//     console.log(data);
//   });
//   chatroom.addChat("hello");
// }, 3000);

// 2. chatroom-ui = handles the UI of the chatroom
