const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");

const addRecipe = (recipe, id) => {
  // Function to add data to UL
  // Takes in the items unique id from Firestore (used to delete the item)
  let time = recipe.created_at.toDate();
  let html = `
  <li data-id=${id}>
    <div>${recipe.title}</div>
    <div>${recipe.created_at.toDate()}</div>
    <button class="btn btn-danger btn-sm my-2">Delete</button>
  </li>
  `;
  console.log(time);
  console.log(html);
  list.innerHTML += html;
};

const deleteRecipe = id => {
  // Function to remove deleted items HTML from the page
  const recipes = document.querySelectorAll("li");
  recipes.forEach(recipe => {
    // Cycle through documents
    if (recipe.getAttribute("data-id") === id) {
      // Delete the HTML of the item that got deleted
      recipe.remove();
    }
  });
};
// Get data from Recipes collection, asynchronous, returns a promise
// Callback function fires after the async retrival of data
// db.collection("recipes") [Non-Realtime Listener]
//   .get()
//   .then(snapshot => {
//     // Fire this function when data is returned
//     // Snapshot = db snapshot (the returned data)
//     // Open Developer Tools Console > Expand Data > Expand docs (each object is a document/record)
//     console.log(snapshot);
//     console.log(snapshot.docs);
//     // Actually display the data in the array (This displays the data of the first object/document in our Collection)
//     console.log(snapshot.docs[0].data());
//     // Get data from each document
//     snapshot.docs.forEach(doc => {
//       console.log(doc.data());
//       console.log(doc.id);
//       // Call function that creates HTML for the data (adds to UL)
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Real-Time Listener Method
// Whenever you call this unsubscribe function, it cancels this realtime listener
const unsubscribe = db.collection("recipes").onSnapshot(snapshot => {
  // Function fired everytime a snapshot is taken of the database (on every change)
  console.log(snapshot);
  // This method displays all changes to the DB
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // Get the actual doc/record
    const doc = change.doc;
    if (change.type === "added") {
      // If added to DB, add HTML to page
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      // If deleted from DB, remove HTML
      deleteRecipe(doc.id);
    }
  });
});
// add documents
form.addEventListener("submit", e => {
  e.preventDefault();
  // Get current timestamp
  const now = new Date();
  // Create item to add to firebase firestore
  const recipe = {
    // Take input from submitted field
    title: form.recipe.value,
    // Convert date to firebase format
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  // Add to Firebase Firestore
  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch(err => {
      console.log(err);
    });
});

// Delete items
list.addEventListener("click", e => {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    // Get the items unique id from the LI to delete
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("item deleted");
      });
  }
});

// Unsubscribe from db changes
// Does not undate UI in realtime anymore after
button.addEventListener("click", () => {
  unsubscribe();
  console.log("Unsubscribed frm DB changes");
});
