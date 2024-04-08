import Book from "./Book";
import RepositoryBase from "./repository";

export default class repositoryBook implements RepositoryBase {
  private books: Array<Book>;

  constructor() {
    this.books = [];
  }
  public addBook(book: any): void {
    this.books.push(book);
  }
  public getBookByTitle(title: string): Book | null {
    const book = this.books.filter((b) => b.title === title);

    if (book == null) {
      return null;
    }

    return book[0];
  }
  public getBooks(): Array<Book> {
    return this.books;
  }
}
