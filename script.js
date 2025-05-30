const library = document.querySelector(".library");
const addBookBtn = document.querySelector(".add-book-btn");
const addBookDialog = document.querySelector(".new-book-dialog");
const addBookForm = document.querySelector(".new-book-form");
const closeBtn = document.querySelector("#close-button");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 320,
    isRead: false,
    id: "1c64d75e-c07a-44eb-99e8-8c3c20685a0f",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    pages: 720,
    isRead: true,
    id: "ae1f677c-9eef-4bdc-8cab-1e529a9b0299",
  },
];

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayLibrary(myLibrary) {
  library.innerHTML = "";
  myLibrary.map((book) => {
    const bookWrapper = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");
    const changeReadStatusBtn = document.createElement("button");
    const deleteBookBtn = document.createElement("button");
    const bookBtnWrapper = document.createElement("div");

    bookWrapper.setAttribute("id", `${book.id}`);
    deleteBookBtn.setAttribute("class", "book-delete-btn");
    changeReadStatusBtn.setAttribute("class", "change-read-status-btn");
    bookBtnWrapper.setAttribute("class", "book-btn-wrapper");

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    bookPages.textContent = `${book.pages} Pages`;
    bookRead.textContent = `${book.isRead ? "Read" : "Not Read"}`;
    changeReadStatusBtn.textContent = `${
      book.isRead ? "Mark Not Read" : "Mark Read"
    }`;
    deleteBookBtn.textContent = "Delete";

    const currentBookId = book.id;
    changeReadStatusBtn.addEventListener("click", () => {
      const book = myLibrary.find((book) => book.id === currentBookId);
      book.isRead = !book.isRead;
      displayLibrary(myLibrary);
    });
    deleteBookBtn.addEventListener("click", () => {
      const updatedLibrary = myLibrary.filter(
        (book) => book.id !== currentBookId
      );
      displayLibrary(updatedLibrary);
    });

    bookWrapper.appendChild(bookTitle);
    bookWrapper.appendChild(bookAuthor);
    bookWrapper.appendChild(bookPages);
    bookWrapper.appendChild(bookRead);
    bookBtnWrapper.appendChild(deleteBookBtn);
    bookBtnWrapper.appendChild(changeReadStatusBtn);
    bookWrapper.appendChild(bookBtnWrapper);

    library.appendChild(bookWrapper);
  });
}

addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
});

addBookForm.addEventListener("submit", () => {
  const formData = new FormData(addBookForm);
  const title = formData.get("book-title");
  const author = formData.get("book-author");
  const pages = formData.get("book-pages");
  const isRead = formData.get("book-is-read") === "on";

  addBookToLibrary(title, author, pages, isRead);
  displayLibrary(myLibrary);
  addBookForm.reset();
});

closeBtn.addEventListener("click", () => {
  addBookDialog.close();
});

displayLibrary(myLibrary);
