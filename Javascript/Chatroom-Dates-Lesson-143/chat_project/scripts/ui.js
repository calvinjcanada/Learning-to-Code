// render new chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
  // ChatUI class for updating the HTML on the page
  constructor(list) {
    // The list is where the messages will be displayed
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    // Generate HTML and update the page
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true
      // Add "ago" to the sentence
    });
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</span>
      </li>
    `;
    this.list.innerHTML += html;
    // Add the generate HTML to the page
  }
}
