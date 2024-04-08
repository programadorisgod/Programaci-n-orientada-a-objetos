import Book from "./Book";
import Library from "./Library";
import repositoryBook from "./repositoryBook";

const book1 = new Book("The Alchemist", "Paulo Coelho", 1988, 10);
const book2 = new Book(
  "The Little Prince",
  "Antoine de Saint-Exupéry",
  1943,
  5
);
const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, 7);

/* console.log(book1);
console.log(book2);
console.log(book3); */

book1.titleBook = "The Alchemist";
book1.autorBook = "Paulo Coelho";
book1.yearOfPublicationBook = 1988;
book1.stockBook = 15;

console.log(book1, "modificado");

book1.lendBook(5);

console.log(book1, "prestado 5 libros");

book1.returnBook(3);

console.log(book1, "retornado 3 libros");

const repository = new repositoryBook();
const library = new Library(repository);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.getBooks());


console.log(library.getBookByTitle("The Alchemist"));
