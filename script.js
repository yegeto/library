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

addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 720, true);

function displayLibrary(myLibrary) {
  myLibrary.map((book) => {
    const bookWrapper = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");

    bookWrapper.setAttribute("id", `${book.id}`);

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookRead.textContent = `${book.isRead ? "Read" : "Not Read"}`;

    bookWrapper.appendChild(bookTitle);
    bookWrapper.appendChild(bookAuthor);
    bookWrapper.appendChild(bookPages);
    bookWrapper.appendChild(bookRead);

    library.appendChild(bookWrapper);
  });
}

displayLibrary(myLibrary);
