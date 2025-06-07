
document.addEventListener("DOMContentLoaded", () => {
    const incompleteBookList = document.getElementById("incompleteBookList");
    const completeBookList = document.getElementById("completeBookList");
  
    function getBooksFromLocalStorage() {
      return JSON.parse(localStorage.getItem("books")) || [];
    }
  
    function saveBooksToLocalStorage(books) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  
    let books = getBooksFromLocalStorage();
    books.forEach(book => renderBook(book));
  
    document.getElementById("bookForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const bookId = Date.now().toString();
      const title = document.getElementById("bookFormTitle").value;
      const author = document.getElementById("bookFormAuthor").value;
      const year = parseInt(document.getElementById("bookFormYear").value);
      const isComplete = document.getElementById("bookFormIsComplete").checked;
  
      const newBook = {
        id: bookId,
        title: title,
        author: author,
        year: year,
        isComplete: isComplete,
      };
  
      books.push(newBook);
      saveBooksToLocalStorage(books);
      renderBook(newBook);
    });
  
    function renderBook(book) {
      const bookElement = document.createElement("div");
      bookElement.setAttribute("data-bookid", book.id);
      bookElement.setAttribute("data-testid", "bookItem");
  
      bookElement.innerHTML = `
        <h3 data-testid="bookItemTitle">${book.title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
        <p data-testid="bookItemYear">Tahun: ${book.year}</p>
        <div>
          <button data-testid="bookItemIsCompleteButton">
            ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
          </button>
          <button data-testid="bookItemDeleteButton">Hapus Buku</button>
          <button data-testid="bookItemEditButton">Edit Buku</button>
        </div>
      `;
  
      const completeButton = bookElement.querySelector('[data-testid="bookItemIsCompleteButton"]');
      completeButton.addEventListener("click", () => toggleBookComplete(book.id));
  
      const deleteButton = bookElement.querySelector('[data-testid="bookItemDeleteButton"]');
      deleteButton.addEventListener("click", () => deleteBook(book.id));
  
      const editButton = bookElement.querySelector('[data-testid="bookItemEditButton"]');
      editButton.addEventListener("click", () => editBook(book.id));
  
      if (book.isComplete) {
        completeBookList.appendChild(bookElement);
      } else {
        incompleteBookList.appendChild(bookElement);
      }
    }
  
    function toggleBookComplete(bookId) {
      const book = books.find((b) => b.id === bookId);
      book.isComplete = !book.isComplete;
  
      const bookElement = document.querySelector(`[data-bookid="${bookId}"]`);
      bookElement.remove();
  
      saveBooksToLocalStorage(books);
      renderBook(book);
    }
  
    function editBook(bookId) {
      const book = books.find((b) => b.id === bookId);
      
      document.getElementById("bookFormTitle").value = book.title;
      document.getElementById("bookFormAuthor").value = book.author;
      document.getElementById("bookFormYear").value = book.year;
      document.getElementById("bookFormIsComplete").checked = book.isComplete;
  
      deleteBook(bookId);
    }

    function deleteBook(bookId) {
      books = books.filter((b) => b.id !== bookId);
  
      const bookElement = document.querySelector(`[data-bookid="${bookId}"]`);
      bookElement.remove();
  
      saveBooksToLocalStorage(books);
    }
  });
  