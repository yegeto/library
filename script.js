const library = document.querySelector(".library");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 320,
    isRead: false,
    id: "1c64d75e-c07a-44eb-99e8-8c3c20685a0f",
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

addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 720, false);
