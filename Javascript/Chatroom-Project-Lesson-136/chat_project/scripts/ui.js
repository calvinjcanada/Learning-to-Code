// Render chat templates to the DOM
// Clear the list of chats when the user changes chat rooms

class ChatUI {
  constructor(list) {
    // The list is the UL that displays the chat mesages
    this.list = list;
  }

  render(data) {
    // Generates HTML for the chat. Renders updates to the DOM
    // Takes in a chat object (that we create) and output it to the DOM
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${data.created_at.toDate()}</div>
      </li>
    `;
    this.list.innerHTML += html;
  }
}
