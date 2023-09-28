let myLibrary = [
  // {
  //     title: 'The Alchemist',
  //     author: 'Paulo Coelho',
  //     noOfPages: 150,
  //     isRead: true
  // },
  // {
  //     title: 'Deep Work',
  //     author: 'Cal Newport',
  //     noOfPages: 200,
  //     isRead: true
  // },
  // {
  //     title: 'The Alchemist',
  //     author: 'Paulo Coelho',
  //     noOfPages: 150,
  //     isRead: false
  // }
];

class Book {
  constructor(title, author, noOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
  }

  showInfo() {
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${
      this.isRead ? "Completed Reading" : "Not read yet"
    }`;
  }

  toggleRead() {
    return (this.isRead = !this.isRead);
  }
}

// function Book(title, author, noOfPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.noOfPages = noOfPages;
//     this.isRead = isRead;
// }

// Book.prototype.showInfo = function() {
//     return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.isRead ? 'Completed Reading' : 'Not read yet'}`;
// }

// Book.prototype.toggleRead = function() {
//     return this.isRead = !this.isRead;

// }

function addBookToLibrary() {
  let titleInput = document.getElementById("titleInput");
  const authorInput = document.getElementById("authorInput").value;
  const pagesInput = document.getElementById("pagesInput").value;
  // let readInput = document.querySelector('input[name="isRead"]:checked').value;
  const readInput = document.querySelector('input[type="checkbox"]').checked;
  const form = document.querySelector("form");
  if (form.checkValidity()) {
    // e.preventDefault();
    // console.log(e);
    myLibrary.push(
      new Book(titleInput.value, authorInput, pagesInput, readInput)
    );
    titleInput.value = null;
    form.reset();
    createForm.classList.toggle("seen");
    cards.textContent = "";
    displayBooks();
  } else {
    return;
  }
}

const main = document.querySelector("main");
const cards = document.querySelector("#cards");

function displayBooks() {
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const title = document.createElement("h3");
    const author = document.createElement("h5");
    const noOfPages = document.createElement("p");
    const readStatus = document.createElement("p");
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const readToggleBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    readToggleBtn.textContent = book.isRead ? "Mark not Read" : "Mark as Read";
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-id", index);
    title.textContent = book.title;
    author.textContent = book.author;
    noOfPages.textContent = "Pages: " + book.noOfPages;
    readStatus.textContent = book.isRead ? "Completed Reading" : "Not Read";
    buttons.append(readToggleBtn, deleteBtn);
    card.append(title, author, noOfPages, readStatus, buttons);
    cards.appendChild(card);

    deleteBtn.addEventListener("click", (e) => {
      const itemForDelete = e.target.dataset.id;
      myLibrary.splice(itemForDelete, 1);
      cards.textContent = "";
      displayBooks();
    });

    readToggleBtn.addEventListener("click", () => {
      book.toggleRead();
      cards.textContent = "";
      displayBooks();
    });
  });
}

//Display on page load
displayBooks();

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

const addBtn = document.querySelector(".add-btn");
const createForm = document.querySelector(".form");
const createBtn = document.querySelector(".create-btn");
const form = document.querySelector("form");

addBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  createForm.classList.toggle("seen");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.matches("form") &&
    !e.target.matches("input") &&
    !e.target.matches("button") &&
    !e.target.matches("label") &&
    !e.target.matches("div")
  ) {
    if (createForm.classList.contains("seen")) {
      createForm.classList.remove("seen");
    }
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
});
