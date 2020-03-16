class Chatroom {
  // Chatroom Class
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    // Connect to database and access chats
    this.unsub;
    // Enable ability to unsubscribe from the Realtime Listerners
  }
  async addChat(message) {
    // Add a chat to the DB
    // format a chat object
    const now = new Date();
    // Get a timestamp
    const chat = {
      //Chat object
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
      // Convert date to firebase format
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    // Retrieve chats from DB in realtime
    this.unsub = this.chats
      // Retrieve chats and also allow unsubscribing from realtime listeners
      .where("room", "==", this.room)
      // Get only chats for the current chatroom
      .orderBy("created_at")
      // Order the chats by time they were sent
      .onSnapshot(snapshot => {
        // Realtime listener for DB updates
        snapshot.docChanges().forEach(change => {
          // Loop through changes in the DB snapshot
          if (change.type === "added") {
            // Check to see if the update was a newly added one
            callback(change.doc.data());
          }
        });
      });
  }
  updateName(username) {
    // Function to update username
    this.username = username;
    localStorage.setItem("username", username);
    // store in local storage
  }
  updateRoom(room) {
    // Function to update chatroom
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      // If there are realtime listeners, unsubscribe from them (because they are connected to the previous chatroom)
      this.unsub();
    }
  }
}
