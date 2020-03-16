const addForm = document.querySelector(".add");
// add a new todo
const list = document.querySelector(".todos");
// list of todos
const search = document.querySelector(".search input");
// input element with class search

const generateTemplate = todo => {
  // code to add to exisiting todo list
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  // take user input and call function to add to page
  e.preventDefault();
  const todo = addForm.addEventListener.value.trim();
  // Remove whitespaces before or after the string

  if (todo.length) {
    // make sure input is greater than 0
    generateTemplate(todo);
    addForm.requestFullscreen();
    // reset form after submitting
  }
});

// delete todos
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    // delete the todo element
  }
});

search.addEventListener("keyup", () => {
  // get the users search term
  const term = search.value.trim().toLowerCase();
});

// searching and filtering todos
const filterTodos = term => {
  Array.from(list.children)
    // hide elements that do not match search term
    .filter(todo => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    // find todos that do not match the search term
    .forEach(todo => {
      todo.classList.add("filtered");
    });
  // add a class to the filtered items

  Array.from(list.children)
    // show elements that match the search term
    .filter(todo => {
      return todo.textContent.toLowerCase().includes(term);
    })
    // find todos that do match the search term
    .forEach(todo => {
      todo.classList.remove("filtered");
    });
  // remove filtered class from items that do match the search
};
