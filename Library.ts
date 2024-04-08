import Book from "./Book";
import repositoryBook from "./repositoryBook";

export default class Library {
  private readonly _repository: repositoryBook;

  constructor(repository: repositoryBook) {
    this._repository = repository;
  }

  public addBook(book: Book) {
    this._repository.addBook(book);
  }

  public getBookByTitle(title: string): Book | null {
    const book = this._repository.getBookByTitle(title);
    return book;
  }

  public getBooks() {
    const books = this._repository.getBooks();
    return books;
  }
}
